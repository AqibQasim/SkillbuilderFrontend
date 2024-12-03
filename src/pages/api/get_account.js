const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Check the request method
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { stripe_account_id } = req.body;

    // Check if stripe_account_id is provided
    if (!stripe_account_id) {
      return res.status(400).json({ error: "Missing stripe_account_id" });
    }

    // Retrieve the Stripe account
    const account = await stripe.accounts.retrieve(stripe_account_id);

    // Send the account data as the response
    res.status(200).json({ account });
  } catch (error) {
    console.error(
      "An error occurred when calling the Stripe API to retrieve an account",
      error,
    );
    res.status(500).json({ error: error.message });
  }
}
