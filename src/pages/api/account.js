const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  try {
    const account = await stripe.accounts.create({
      controller: {
        fees: {
          payer: 'application',
        },
        losses: {
          payments: 'application',
        },
        stripe_dashboard: {
          type: 'express',
        },
        
      },
      capabilities: {
        card_payments: {requested: true},
        transfers: {requested: true},
    },
    settings: {
      payouts: {
        schedule: {
          interval: 'daily', 
          delay_days: 14
        }
      }
    }
    });

    res.json({
      account: account.id,
    });
  } catch (error) {
    console.error(
      "An error occurred when calling the Stripe API to create an account",
      error
    );
    res.status(500);
    res.send({ error: error.message });
  }
}
  