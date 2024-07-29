import { useState, useEffect } from "react";
import withAuth from "@/components/WithAuth";
import DashboardLayout from "../../components/DashboardLayout";
import Button from '../../components/Button';

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

    useEffect(() => {
        createAccount(setAccountCreatePending, setError, setConnectedAccountId);
    }, []);

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
            <div className="text-center">
                <h1 className="text-2xl font-bold">Payment</h1>
                {connectedAccountId && !accountLinkCreatePending && (
                    <p>Your Stripe Account ID is: {connectedAccountId}</p>
                )}
                <div className="flex justify-end">
                    <Button className="md:block mt-32" onClick={handleAccountLink}>
                        Add Payment Details
                    </Button>
                </div>
                {error && <p className="text-red-500">An error occurred. Please try again.</p>}
            </div>
        </DashboardLayout>
    );
}

export default withAuth(Payments);
