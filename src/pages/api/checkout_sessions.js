const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
     
      const items =  JSON.parse(req.body.items);

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
