import { sendMail } from "@/app/service/mailService";

const handler = async (req, res) => {
  try {
    const { method } = req;

    switch (method) {
      case "POST": {
        const { formdata } = req.body;

        if (!formdata) {
          return res.status(400).json({ error: "Invalid request body" });
        }

        // Extract each step from formdata
        const { step1, step2, step3, step4, step5, step6 } = formdata;

        if (!step1 || !step2 || !step3 || !step4 || !step5 || !step6) {
          return res.status(400).json({ error: "Incomplete form data" });
        }

        const { postal_code } = step1;

        // Include other required fields
        const emailContent = `
        Subject: ${step4.title} ${step4.firstName} ${step4.surname}
        Message: "POSTAL CODE:"  ${postal_code}
        Name:  ${step4.title} ${step4.firstName} ${step4.surname}
        
        Additional Details:
        Step 2:
          - Driver Type: ${step2.dr_type}
          - Course Type: ${step2.dr_course_type}
          - Course Price:
            - 10 Hours:
              - Value: ${step2.dr_course_price['10_hours'].value}
              - Variant: ${step2.dr_course_price['10_hours'].variant}
              - Full: ${step2.dr_course_price['10_hours'].full}
              - Deposit: ${step2.dr_course_price['10_hours'].deposit}
        
        Step 3:
          - Fast Track Practical: ${step3.fast_track_practical}
          - Fast Track Theory: ${step3.fast_track_theory}
          - Already Booked: ${step3.i_have_already_booked}
          - Already Passed: ${step3.i_have_already_passed}
        
        Step 5:
          - Intensive Course: ${step5.intensiveCourse}
        
        Step 6:
          - Pass Protect: ${step6.pass_protect}
        `;
        
        

        try {
          // Send the email
          await sendMail(step4.email, "m.waqas.ansari36@gmail.com, sharjeelkhanvmi@gmail.com", emailContent);

          // Log a success message
          console.log("Email sent successfully");

          // Send a response to the client
          res.status(200).send("Success");
        } catch (error) {
          // Handle errors
          console.error("Error sending email:", error);
          res.status(500).json({ error: "Error sending email" });
        }
        break;
      }
      case "GET": {
        // Do something for GET requests if needed
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;