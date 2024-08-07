import Connect from "@/components/Connect";
import ConnectHistory from "@/components/ConnectHistory";
import withAuth from "@/components/WithAuth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import DashboardLayout from "../../components/DashboardLayout";
import { fetchOneInstructor } from "../../../redux/thunks/instructorThunk";
import AdminRevenueStatistics from "@/components/AdminRevenueStatistics";

const createAccount = async (
  setAccountCreatePending,
  setError,
) => {
  setAccountCreatePending(true);
  setError(false);

  try {
    const response = await fetch("/api/account", {
      method: "POST",
    });
    const json = await response.json();
    setAccountCreatePending(false);

    const { account, error } = json;
    if (account) {
      return account; // Return the created account ID
    }

    if (error) {
      setError(true);
      return null;
    }
  } catch (err) {
    setAccountCreatePending(false);
    setError(true);
    return null;
  }
};

function Payments() {
  const [accountCreatePending, setAccountCreatePending] = useState(false);
  const [accountLinkCreatePending, setAccountLinkCreatePending] = useState(false);
  const [error, setError] = useState(false);
  const [connectedAccountId, setConnectedAccountId] = useState(null);
  const [accountLinkUrl, setAccountLinkUrl] = useState(null);

  const dispatch = useDispatch();
  const id = useSelector((state) => state.singleInstructor.id);
  const userId = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (userId && !id) {
      dispatch(fetchOneInstructor(userId));
    }
  }, [userId, id, dispatch]);

  useEffect(() => {
    if (id) {
      const fetchPaymentDetails = async () => {
        try {
          const response = await fetch(
            `http://127.0.0.1:4000/check-payment-rec?instructor_id=${id}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            },
          );

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              errorData.message || "Failed to fetch payment details",
            );
          }

          const data = await response.json();
          console.log("API Response Data:", data); // Log entire response data for debugging
          const { message } = data;

          // Validate that `message` is an array and check its length
          if (Array.isArray(message)) {
            if (message.length > 0) {
              const stripe_acc_id = message[0]?.account_reg_id; // Use optional chaining

              

              if (stripe_acc_id) {
                setConnectedAccountId(stripe_acc_id);
              } else {
                throw new Error("Account registration ID is missing in the response");
              }
            } else {
                setAccountLinkCreatePending(true);
              // Message array is empty, create a new account
              const newAccountId = await createAccount(
                setAccountCreatePending,
                setError,
              );

              if (newAccountId) {
                setConnectedAccountId(newAccountId);

                const regResponse = await fetch(`http://127.0.0.1:4000/inst-stipe-acc-reg`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    instructor_id: id,
                    user_id: userId,
                    account_reg_id: newAccountId,
                  }),
                });

                if (!regResponse.ok) {
                  const regErrorData = await regResponse.json();
                  throw new Error(
                    regErrorData.message || "Failed to register account details",
                  );
                }
              } else {
                throw new Error("Failed to create a new account");
              }
            }
          } else {
            throw new Error("Unexpected response format: `message` is not an array");
          }
        } catch (err) {
          console.error("Error in fetchPaymentDetails:", err);
          setError(true);
        }
      };

      fetchPaymentDetails();
      
    }
   
  }, [id]);

  const handleAccountLink = async () => {

    setError(false);

    try {
      const response = await fetch("/api/account_link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ connectedAccountId }),
      });

      const data = await response.json();
      setAccountLinkCreatePending(false);

      if (data.url) {
        setAccountLinkUrl(data.url);
        window.location.href = data.url; // Redirect to the Stripe account link URL
      } else {
        setError(true);
      }
    } catch (error) {
      setAccountLinkCreatePending(false);
      setError(true);
    }
  };

  return (
    <DashboardLayout>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Payment</h1>
        {connectedAccountId && !accountLinkCreatePending && (
          <p className="mb-5">Your Stripe Account ID is: {connectedAccountId}</p>
        )}


        {connectedAccountId && !accountLinkCreatePending && (
          <>
         
            <h1 className="my-3 text-start text-2xl font-bold">
            Transaction History
            </h1>
            <ConnectHistory stripe_account_id={connectedAccountId} />
          </>
        )}
        
        {connectedAccountId && accountLinkCreatePending && (
          <div className="flex justify-end">
            <Button className="mt-10 md:block" onClick={handleAccountLink}>
              Add Payment Details
            </Button>
          </div>
        )}
        {error && (
          <p className="text-red-500">An error occurred. Please try again.</p>
        )}
      </div>
    </DashboardLayout>
  );
}

export default withAuth(Payments);
