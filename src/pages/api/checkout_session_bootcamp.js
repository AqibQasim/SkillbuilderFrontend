const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        course_title,
        course_description,
        amount,
        student_id,
        instructor_id,
        course_id,
      } = req.body;
      if (!student_id) {
        res.redirect(303, "/login"); // Replace '/login' with the route to your login screen
        return;
      }

      const stripe_acc_details = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-live-session-course-payment-of-student?student_id=${student_id}&course_id=${course_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      //if student has not paid for the course
      //if (stripe_acc_details.status === 404) {
        //throw new Error(errorData.message || "Failed to fetch payment details");

        const paymentAPI = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/live-session-course-payment`,
          {
            method: "POST",
            body: JSON.stringify({
              student_id,
              instructor_id,
              amount,
            course_id
            }),
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        //if(paymentAPI.status===200){
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [
              {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: course_title,
                    description: course_description || "No Description"
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
            success_url: `${req.headers.origin}/bootcamp_payment_success?student_id=${student_id}&instructor_id=${instructor_id}&course_id=${course_id}&amount=${amount}`,
            cancel_url: `${req.headers.origin}/bootcamp/${course_id}`,
          });
          res.redirect(303, session.url);
        //}
      //}

    } catch (err) {
      res.status(err.statusCode || 500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
