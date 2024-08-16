const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const checkouts = await stripe.checkout.sessions.list({
        limit: 4, // Adjust limit as needed
      });

      // Debugging: log the response from Stripe
      console.log('Stripe response:', checkouts);

      // Validate the response format
      if (Array.isArray(checkouts.data)) {
        res.status(200).json({ checkouts: checkouts.data });
      } else {
        throw new Error('Invalid response format from Stripe');
      }
    } catch (error) {
      console.error('Error fetching checkout sessions:', error);
      res.status(500).json({ error: 'Failed to fetch checkout sessions' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
