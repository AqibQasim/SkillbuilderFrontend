const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { stripeAccountId } = req.body;

      const payouts = await stripe.payouts.list({ stripeAccount: stripeAccountId });

      console.log("Fetched payouts:", payouts); // Log payouts for debugging
      res.status(200).json({ payouts: payouts.data }); // Ensure that the correct data is returned
    } catch (error) {
      console.error("Error fetching payouts:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
