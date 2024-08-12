const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { connectedAccountId } = req.body;

      const accountLink = await stripe.accountLinks.create({
        account: connectedAccountId,
        return_url: `${req.headers.origin}/dashboard/payments`,
        refresh_url: `${req.headers.origin}/dashboard/payments`,
        type: "account_onboarding",
      });

      res.status(200).json({ url: accountLink.url }); // Send the URL in the response
    } catch (error) {
      console.error(
        "An error occurred when calling the Stripe API to create an account link:",
        error
      );
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
