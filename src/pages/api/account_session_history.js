// pages/api/account_session.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { stripe_account_id } = req.body;

      // Assuming connectedAccountId is used; otherwise, remove it.
      const accountSession = await stripe.accountSessions.create({
        account: stripe_account_id,
        components: {
          payments: {
            enabled: true,
            features: {
              refund_management: true,
              dispute_management: true,
              capture_payments: true,
              destination_on_behalf_of_charge_management: false,
            },
          },
        },
      });

      // Send the accountSession information to the client
      res.status(200).json({ client_secret: accountSession.client_secret });
    } catch (error) {
      console.error("An error occurred when calling the Stripe API to create an account", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
