const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { course_title, course_description, amount, student_id, instructor_id, course_id} = req.body;
      if (!student_id) {
        res.redirect(303, "/login"); // Replace '/login' with the route to your login screen
        return;
      }
    //   const parsedItems = JSON.parse(items); // `items` should be an array

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

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: course_title,
                description: course_description || "No Description",
                // images: [
                //   "https://example.com/image.jpg",
                // ],
              },
              unit_amount: amount * 100, // Ensure 'amount' is a number
            },
            quantity: 1,
          },
        ],
        metadata: {
          student_id: student_id,
          instructor_id: instructor_id,
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

        success_url: `${req.headers.origin}/bootcamp_payment_success?student_id=${student_id}&instructor_id=${instructor_id}&course_id=${course_id}&amount=${amount}`,
        cancel_url: `${req.headers.origin}/bootcamp/${course_id}`,
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
