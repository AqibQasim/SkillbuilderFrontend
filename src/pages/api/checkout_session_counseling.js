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

      // const { items, studentId } = req.body;
      // const parsedItems = JSON.parse(items); // `items` should be an array

    //   const totalAmount = parsedItems.reduce(
    //     (total, item) => total + item.amount * 100,
    //     0,
    //   );

    //   const stripe_acc_details = await fetch(
    //     `${process.env.NEXT_PUBLIC_BASE_API}/check-payment-rec?id=${parsedItems[0].instructor_id}`,
    //     {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     },
    //   );

    //   if (!stripe_acc_details.ok) {
    //     const errorData = await stripe_acc_details.json();
    //     throw new Error(errorData.message || "Failed to fetch payment details");
    //   }

    //   const stripe_acc_data = await stripe_acc_details.json();
    //   const { message } = stripe_acc_data;
    //   const stripe_acc_id = message[0]["account_reg_id"];

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
      console.log("Student ID:", studentId);
      console.log("Items:", parsedItems);
      
      // res.status(200).json({
      //   message: "Form submitted successfully",
      //   studentId,
      //   items,
      // });
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
        cancel_url: `${req.headers.origin}/counseling`,
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
