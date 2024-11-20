const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { stripeAccountId } = req.body;

      // Use the `Stripe-Account` header to specify the connected account
      const charges = await stripe.charges.list(
        {}, // Empty object since no additional filters are passed
        { stripeAccount: stripeAccountId } // Pass the connected account ID
      );

      console.log("Fetched charges:", charges); // Log charges for debugging
      res.status(200).json({ charges: charges.data }); // Return the charges data
    } catch (error) {
      console.error("Error fetching charges:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
