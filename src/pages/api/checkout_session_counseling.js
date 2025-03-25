const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parser to handle form data manually
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const form = formidable();

    form.parse(req, async(err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: "Error parsing form data" });
      }
      console.log(fields)

      
      // Access form input values here
      const studentId = fields.studentId[0];
      const parsedItems = JSON.parse(fields.items); // Parse the JSON string back to an object

      if (!studentId) {
        res.redirect(303, "/login"); // Replace '/login' with the route to your login screen
        return;
      }
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: parsedItems.map((item) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
                description: item.description || "No Description",
                images: [
                  "https://www.globalcareercounsellor.com/blog/wp-content/uploads/2020/01/what-is-career-counselling.png",
                ],
              },
              unit_amount: item.amount * 100,
            },
            quantity: 1,
          };
        }),
        metadata: {
          student_id: studentId,
          instructor_id: parsedItems[0].instructor_id,
        },
        // payment_intent_data: {
        //   application_fee_amount: Math.round(totalAmount * 0.2),
        //   transfer_data: {
        //     destination: stripe_acc_id,
        //   },
        //   metadata: {
        //     student_id: studentId,
        //     instructor_id: parsedItems[0].instructor_id,
        //   },
        // },

        success_url: `${req.headers.origin}/counseling_payment_success?student_id=${studentId}&instructor_id=${parsedItems[0]?.instructor_id}`,
        cancel_url: `${req.headers.origin}/career-counseling`,
      });
  
      res.redirect(303, session.url);
    });

    } catch (err) {
      res.status(err.statusCode || 500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
