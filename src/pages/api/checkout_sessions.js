const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {

     
      const items =  JSON.parse(req.body.items);
      const totalAmount = items.reduce((total, item) => total + item.amount * 100, 0);

      const stripe_acc_details = await fetch(`http://127.0.0.1:4000/check-payment-rec?${items[0].instructor_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!stripe_acc_details.ok) {
        const errorData = await stripe_acc_details.json();
        throw new Error(errorData.message || 'Failed to fetch payment details');
      }

      const stripe_acc_data =  await stripe_acc_details.json()

      const {message} = stripe_acc_data;
      
      const stripe_acc_id = message[0]['account_reg_id']

         
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: items.map(item => {
         
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.title,
                description: item.description || "No Description",
                images:['https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/09/23164635/Software-Courses.jpg']
              },
              unit_amount: item.amount * 100
            },
            quantity: 1,
            
          }
        }),
        mode: 'payment',
        payment_intent_data: {
          application_fee_amount: Math.round(totalAmount * 0.20),
          transfer_data: {
            destination: stripe_acc_id,
          },
        },
        success_url: `${req.headers.origin}/shoppingcart`,
        cancel_url: `${req.headers.origin}/shoppingcart`,
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
