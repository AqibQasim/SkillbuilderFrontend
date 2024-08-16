import Connect from "@/components/Connect";
import ConnectPayout from "@/components/ConnectPayout";
import withAuth from "@/components/WithAuth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import DashboardLayout from "../../components/DashboardLayout";
import { fetchOneInstructor } from "../../../redux/thunks/instructorThunk";
import AdminRevenueStatistics from "@/components/AdminRevenueStatistics";

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const createAccount = async (setAccountCreatePending, setError) => {
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
  const [accountLinkCreatePending, setAccountLinkCreatePending] =
    useState(false);
  const [error, setError] = useState(false);
  const [connectedAccountId, setConnectedAccountId] = useState(null);
  const [accountLinkUrl, setAccountLinkUrl] = useState(null);
  const [payouts, setPayouts] = useState([]);
  const [bankDetails, setBankDetails] = useState([]); // State to store bank details
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const dispatch = useDispatch();
  const instructor = useSelector((state) => state.singleInstructor);
  // const userId = useSelector((state) => state.auth.user);

  // useEffect(() => {
   
  //   dispatch(fetchOneInstructor(instur));

  // }, [instructor, dispatch]);
  

  // useEffect(() => {

  //   if()

  //   console.log("id in the dashboard page: ", id)
  
    
  // }, [id, dispatch]);
  

  useEffect(() => {

    if (instructor) {
      console.log("INSTRUCTOR DETAILS IN PAYMENTS", instructor)
      const fetchPaymentDetails = async () => {
        try {
          const response = await fetch(
            `http://127.0.0.1:4000/check-payment-rec?id=${instructor.user_id}`,
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
                fetchPayouts(stripe_acc_id);
                fetchBankDetails(stripe_acc_id); // Fetch bank details
              } else {
                throw new Error(
                  "Account registration ID is missing in the response",
                );
              }
            } else {
              setAccountLinkCreatePending(true);
              // Message array is empty, create a new account
              const newAccountId = await createAccount(
                setAccountCreatePending,
                setError,
              );

              if (newAccountId) {
                fetchPayouts(newAccountId);
                setConnectedAccountId(newAccountId);
                fetchBankDetails(newAccountId); // Fetch bank details

                const regResponse = await fetch(
                  `http://127.0.0.1:4000/inst-stipe-acc-reg`,
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      instructor_id: id,
                      user_id: userId,
                      account_reg_id: newAccountId,
                    }),
                  },
                );

                if (!regResponse.ok) {
                  const regErrorData = await regResponse.json();
                  throw new Error(
                    regErrorData.message ||
                      "Failed to register account details",
                  );
                }
              } else {
                throw new Error("Failed to create a new account");
              }
            }
          } else {
            throw new Error(
              "Unexpected response format: `message` is not an array",
            );
          }
        } catch (err) {
          console.error("Error in fetchPaymentDetails:", err);
          setError(true);
        }
      };

      fetchPaymentDetails();
    }
  }, [instructor]);

  const getBankName = (bankId) => {
    const bankDetail = bankDetails.find((bank) => bank.id === bankId);
    return bankDetail ? bankDetail.bank_name : "Unknown Bank";
  };

  const fetchBankDetails = async (stripeAccountId) => {
    try {
      const response = await fetch("/api/get_bankdetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stripeAccountId }),
      });

      const data = await response.json();
      console.log("Bank Details API Response:", data); // Log entire response data for debugging
      if (data.data) {
        setBankDetails(data.data);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error fetching bank details:", error);
      setError(true);
    }
  };

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

  const fetchPayouts = async (stripeAccountId) => {
    try {
      const response = await fetch("/api/get_payouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stripeAccountId }),
      });

      const data = await response.json();
      console.log("Payouts API Response:", data); // Log entire response data for debugging
      if (data.payouts) {
        setPayouts(data.payouts);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error fetching payouts:", error);
      setError(true);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DashboardLayout>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Payment</h1>
        {connectedAccountId && !accountLinkCreatePending && (
          <p className="mb-5">
            Your Stripe Account ID is: {connectedAccountId}
          </p>
        )}
        <AdminRevenueStatistics />
        {connectedAccountId && !accountLinkCreatePending && (
          <>
            <h1 className="my-3 text-start text-2xl font-bold">Wallet</h1>
            <Connect stripe_account_id={connectedAccountId} />

            <div className="container my-3 rounded-lg bg-white p-4 shadow-md">
              <h2 className="text-start text-xl font-semibold">
                Last Withdrawal
              </h2>
              {Array.isArray(payouts) && payouts.length > 0 ? (
                (() => {
                  const payout = payouts[0]; // Get the first payout
                  return (
                    <div key={payout.id}>
                      <p className="text-start">
                        <span className="text-lg font-medium text-blue">
                          ${(payout.amount / 100).toFixed(2)}{" "}
                          {payout.currency.toUpperCase()}
                        </span>{" "}
                        <span className="text-sm">
                          to {getBankName(payout.destination)}
                        </span>
                      </p>
                      <p className="text-start text-sm">
                        {formatTimestamp(payout.created)}
                      </p>

                      <button
                        onClick={openModal}
                        className="font-medium text-blue"
                      >
                        View History
                      </button>
                    </div>
                  );
                })()
              ) : (
                <p>No payouts available.</p>
              )}
            </div>

            <div className="container my-5 rounded-lg bg-white p-4 shadow-md">
              <h2 className="my-3 text-start text-xl font-semibold">
                Withdrawl Methods
              </h2>
              {bankDetails.length > 0 ? (
                <ul className="list-disc pl-5">
                  {bankDetails.map((bank) => (
                    <li key={bank.id} className="mb-4 flex gap-5 text-start">
                      <svg
                        width="76"
                        height="42"
                        viewBox="0 0 96 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M89 0H7C3.13401 0 0 3.13401 0 7V54.5385C0 58.4045 3.13401 61.5385 7 61.5385H89C92.866 61.5385 96 58.4045 96 54.5385V7C96 3.13401 92.866 0 89 0Z"
                          fill="#0E4595"
                        />
                        <path
                          d="M36.0819 42.9181L40.1878 18.8246H46.7552L42.6463 42.9181H36.0819ZM66.3723 19.344C65.0714 18.8558 63.0324 18.332 60.4865 18.332C53.9973 18.332 49.4262 21.5997 49.3875 26.2832C49.3507 29.7453 52.6507 31.6766 55.1415 32.8291C57.698 34.0101 58.5572 34.7632 58.5451 35.8178C58.529 37.4327 56.5038 38.1706 54.6163 38.1706C51.9877 38.1706 50.5913 37.8054 48.4345 36.9058L47.5882 36.523L46.6665 41.9166C48.2004 42.5891 51.0369 43.1718 53.9819 43.2019C60.8853 43.2019 65.3665 39.9717 65.4177 34.9703C65.4422 32.2295 63.6927 30.1437 59.9038 28.4241C57.6084 27.3096 56.2026 26.5658 56.2175 25.4373C56.2175 24.4358 57.4074 23.3648 59.9783 23.3648C62.1259 23.3315 63.6817 23.7998 64.8938 24.2878L65.4822 24.566L66.3723 19.344ZM83.272 18.8242H78.1973C76.6252 18.8242 75.4487 19.2534 74.7584 20.8222L65.0053 42.9022H71.9014C71.9014 42.9022 73.0288 39.9333 73.2838 39.2816C74.0377 39.2816 80.7367 39.2919 81.6946 39.2919C81.8911 40.1354 82.4934 42.9022 82.4934 42.9022H88.5874L83.272 18.8235V18.8242ZM75.2206 34.3824C75.7636 32.9942 77.8372 27.6472 77.8372 27.6472C77.7983 27.7115 78.3761 26.2523 78.7078 25.3477L79.1515 27.4251C79.1515 27.4251 80.4092 33.1763 80.672 34.3824H75.2206ZM30.5067 18.8242L24.0772 35.255L23.392 31.9159C22.1951 28.0669 18.4659 23.8968 14.2969 21.8091L20.1758 42.8798L27.1242 42.872L37.4632 18.824H30.5067"
                          fill="white"
                        />
                        <path
                          d="M18.0875 18.8286H7.49788L7.41406 19.3299C15.6526 21.3242 21.1039 26.1438 23.3673 31.9342L21.0645 20.8622C20.667 19.3367 19.5141 18.8814 18.0878 18.8281"
                          fill="#F2AE14"
                        />
                      </svg>

                      <div className="flex flex-col">
                        <p className="font-bold">{bank.bank_name}</p>
                        <div className="flex-wrap">
                          <p>**** {bank.last4}</p>
                          <p>{bank.routing_number}</p>
                          {/* <p>{bank.country}</p> */}
                          <p>{bank.currency.toUpperCase()}</p>
                          {/* <p>{bank.status}</p> */}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No bank details available.</p>
              )}
            </div>
          </>
        )}

        {connectedAccountId && accountLinkCreatePending && (
          <div className="flex justify-end">
            <Button className="mt-10 md:block" onClick={handleAccountLink}>
              Add Payment Details
            </Button>
          </div>
        )}
        {/* {error && (
          <p className="text-red-500">An error occurred. Please try again.</p>
        )} */}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="relative w-full max-w-xl h-5/6 overflow-y-auto rounded-lg bg-white p-4 shadow-lg">
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
            </div>
            <ConnectPayout stripe_account_id={connectedAccountId} />
          </div>
        </div>
)}

    </DashboardLayout>
  );
}

export default withAuth(Payments);
