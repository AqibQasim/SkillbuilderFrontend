import { useState, useEffect } from 'react';
import { loadConnectAndInitialize } from '@stripe/connect-js';
import { ConnectComponentsProvider, ConnectPayouts, ConnectPayments } from "@stripe/react-connect-js";

export default function ConnectHistory({stripe_account_id}) {
  const [stripeConnectInstance, setStripeConnectInstance] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchClientSecret = async () => {
    try {
      // Fetch the AccountSession client secret
      const response = await fetch('/api/account_session_history', { method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stripe_account_id }),
       });
      if (!response.ok) {
        // Handle errors on the client side here
        const { error } = await response.json();
        console.error('An error occurred: ', error);
        setError(error || 'An unknown error occurred.');
        setStripeConnectInstance(null);
        return null;
      } else {
        const { client_secret: clientSecret } = await response.json();
        setError('');
        return clientSecret;
      }
    } catch (err) {
      console.error('An error occurred: ', err);
      setError('An error occurred while fetching the client secret.');
      setStripeConnectInstance(null);
      return null;
    }
  };

  useEffect(() => {
    const initializeStripe = async () => {
      setLoading(true);
      const clientSecret = await fetchClientSecret();
      if (clientSecret) {
        try {
          const instance = await loadConnectAndInitialize({
            publishableKey: "pk_test_51OfPQBCtLGKA7fQGNEt4t2Nn4S9RxfXQxl4nqi8TK5vWM87A8AZPmdgEZyHHSi3OcpKx8uOGPLnyYSbwbimbSAbF00vZRmnYK1",
            fetchClientSecret: async () => clientSecret,
          });
          setStripeConnectInstance(instance);
        } catch (err) {
          console.error('Failed to initialize Stripe Connect:', err);
          setError('Failed to initialize Stripe Connect.');
        }
      }
      setLoading(false);
    };

    initializeStripe();
  }, []);

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p id="error" className="text-red-500">{error}</p>}
      {stripeConnectInstance && (
        <>
        <ConnectComponentsProvider connectInstance={stripeConnectInstance}>
          <ConnectPayments />
        </ConnectComponentsProvider>
        </>
      )}
    </div>
  );
}
