import { useState, useEffect } from "react";
import withAuth from "@/components/WithAuth";
import DashboardLayout from "../../components/DashboardLayout";
import Button from '../../components/Button';
import Connect from "@/components/Connect";
import ConnectHistory from "@/components/ConnectHistory";
import { useSelector } from "react-redux";

const createAccount = async (setAccountCreatePending, setError, setConnectedAccountId) => {
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
            setConnectedAccountId(account);
        }

        if (error) {
            setError(true);
        }
    } catch (err) {
        setAccountCreatePending(false);
        setError(true);
    }
};

function Payments() {
    const [accountCreatePending, setAccountCreatePending] = useState(false);
    const [accountLinkCreatePending, setAccountLinkCreatePending] = useState(false);
    const [error, setError] = useState(false);
    const [connectedAccountId, setConnectedAccountId] = useState();
    const [accountLinkUrl, setAccountLinkUrl] = useState(null); // State to hold the URL
    // const { id } = useSelector(state => state.profile)
    const id = useSelector((state) => state.singleInstructor.id);

    console.log(`id is ${id}`)

    useEffect(() => {
        
        const fetchPaymentDetails = async () => {
            try {
                const stripe_acc_details = await fetch(`http://127.0.0.1:4000/check-payment-rec?instructor_id=${id}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (!stripe_acc_details.ok) {
                    const errorData = await stripe_acc_details.json();
                    throw new Error(errorData.message || 'Failed to fetch payment details');
                }

                const stripe_acc_data = await stripe_acc_details.json();
                const { message } = stripe_acc_data;
                const stripe_acc_id = message[0]['account_reg_id'];

                if (!stripe_acc_id) {
                    createAccount(setAccountCreatePending, setError, setConnectedAccountId);
                    
                    await fetch(`http://127.0.0.1:4000/inst-stipe-acc-reg`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body:{
                            instructor_id:id,
                            user_id: id,
                            account_reg_id: connectedAccountId
                        }
                    });

                } else {
                    setConnectedAccountId(stripe_acc_id);
                }
            } catch (err) {
                setError(true);
            }
        };

        fetchPaymentDetails();

    }, [id]);

    const handleAccountLink = async () => {
        setAccountLinkCreatePending(true);
        setError(false);

        try {
            const response = await fetch("/api/account_link", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
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
            <div className="text-center ">
                <h1 className="text-2xl font-bold">Payment</h1>
                {connectedAccountId && !accountLinkCreatePending && (
                    <p>Your Stripe Account ID is: {connectedAccountId}</p>
                )}
               
                {connectedAccountId && !accountLinkCreatePending && (
                    <>
                        <h1 className="text-2xl font-bold my-3 text-start">Payouts</h1>
                        < Connect stripe_account_id={connectedAccountId}/>
                        <h1 className="text-2xl font-bold my-3 text-start">Payment History</h1>
                        < ConnectHistory stripe_account_id={connectedAccountId}/>
                    </>
                )}
                {connectedAccountId && accountLinkCreatePending && (
                <div className="flex justify-end">
                    <Button className="md:block mt-10" onClick={handleAccountLink}>
                        Add Payment Details
                    </Button>
                </div>
                )}
                {error && <p className="text-red-500">An error occurred. Please try again.</p>}
            </div>
        </DashboardLayout>
    );
}

export default withAuth(Payments);
