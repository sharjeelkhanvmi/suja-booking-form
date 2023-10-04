import { sendMail } from "@/app/service/mailService";

const handler = async (req, res) => {
  try {
    const { method } = req;
   
    switch (method) {
      case "POST": {
        const { subject="Static Subject", Name, postalCode,Email } = req.body; 
        // Include other required fields
        const emailContent = `
          Subject: ${subject}
          Message: "POSTAL CODE:"  ${postalCode}
          Name:  ${Name}`; // Include postal_code in the email

        try {
          // Send the email
          await sendMail(subject, "sharjeelkhanvmi@gmail.com", emailContent);
          
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
