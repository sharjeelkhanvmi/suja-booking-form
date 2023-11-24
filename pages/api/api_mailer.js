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
        const emailContent = `<html lang="en">   <head>
        <style>
          table br {
            display: none;
          }
        </style> </head>
      <div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Suja Receipt<div></div>
      </div>      
      <body style="font-family:&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;background-color:#ffffff">
        <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:37.5em;margin:0 auto;padding:20px 0 48px;width:760px">
          <tr style="width:100%">
            <td>            <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td>                  <td><img alt=" Logo" src="https://sujadrivingschool.co.uk/wp-content/uploads/2019/04/apple-icon-152x152.png" width="42" height="42" style="display:block;outline:none;border:none;text-decoration:none" /></td>
                    <td align="right" style="display:table-cell">
                      <p style="font-size:32px;line-height:24px;margin:16px 0;font-weight:300;color:#888888">Suja Booking Receipt</p></td>
            </td>
          </tr>
          </tbody>
        </table>
    
        <table style="border-collapse:collapse;border-spacing:0px;color:rgb(51,51,51);background-color:rgb(250,250,250);border-radius:3px;font-size:12px;margin:30px 0 15px 0;height:24px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
        <tbody>
          <tr>
            <td>
              <p style="font-size:14px;line-height:24px;margin:0;background:#fafafa;padding-left:10px;font-weight:500">Customer Details</p>
            </td>
          </tr>
        </tbody>
      </table>
        <table style="border-collapse:collapse;border-spacing:0px;color:rgb(51,51,51);background-color:rgb(250,250,250);border-radius:3px;font-size:12px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
          <tbody>
            <tr>
              <td>          <table width="100%" style="height:46px" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                  <tbody style="width:100%">
                    <tr style="width:100%">
                      <td colSpan="2">
                        <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                          <tbody style="width:100%">
                            <tr style="width:100%">
                              <td style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                                <p style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">EMAIL</p><a target="_blank" style="color:#15c;text-decoration:underline;font-size:12px;margin:0;padding:0;line-height:1.4">${step4.email}</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                          <tbody style="width:100%">
                            <tr style="width:100%">
                              <td style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                                <p style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">NAME</p>
                                <p style="font-size:12px;line-height:1.4;margin:0;padding:0;text-transform: capitalize;">${step4.firstName} ${step4.surname}</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                          <tbody style="width:100%">
                            <tr style="width:100%">
                              <td style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                                <p style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">ORDER ID</p><a target="_blank" style="color:#15c;text-decoration:underline;font-size:12px;margin:0;padding:0;line-height:1.4">ML4F5L8522</a>
                              </td>
                              <td style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                                <p style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">PHONE NO.</p>
                                <a target="_blank" style="color:#15c;text-decoration:underline;font-size:12px;margin:0;padding:0;line-height:1.4">${step4.phone_number}</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td colSpan="2" style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                        <p style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">POSTAL CODE</p>
                        <p style="font-size:12px;line-height:1.4;margin:0;padding:0">${postal_code}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table style="border-collapse:collapse;border-spacing:0px;color:rgb(51,51,51);background-color:rgb(250,250,250);border-radius:3px;font-size:12px;margin:30px 0 15px 0;height:24px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
          <tbody>
            <tr>
              <td>
                <p style="font-size:14px;line-height:24px;margin:0;background:#fafafa;padding-left:10px;font-weight:500">Course Details</p>
              </td>
            </tr>
          </tbody>
        </table>
        <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
          <tbody>
            <tr>
              <td>
              <td style="width:64px"><img alt="Suja icon" src="https://sujadrivingschool.co.uk/wp-content/uploads/2019/04/apple-icon-152x152.png" width="64" height="64" style="display:block;outline:none;border:1px solid rgba(128,128,128,0.2);text-decoration:none;margin:0 0 0 20px;border-radius:14px" /></td>
              <td style="padding-left:22px">
              ${Object.keys(step2.dr_course_price).map((courseKey, index) => (
                `<p style="font-size:12px;line-height:1.4;margin:0;font-weight:600;padding:0" key=${index}>
                  ${step2.dr_course_price[courseKey].value} ${step2.dr_course_price[courseKey].variant} - ${step2.dr_type} - ${step6.payment}
                </p>`
              ))}
                <p style="font-size:12px;line-height:1.4;margin:0;color:rgb(102,102,102);padding:0">Fast Track Practical: ${step3.fast_track_practical}</p>
                <p style="font-size:12px;line-height:1.4;margin:0;color:rgb(102,102,102);padding:0">Fast Track Theory: ${step3.fast_track_theory}</p>
                <p style="font-size:12px;line-height:1.4;margin:0;color:rgb(102,102,102);padding:0">Already Booked: ${step3.i_have_already_booked}</p>
                <p style="font-size:12px;line-height:1.4;margin:0;color:rgb(102,102,102);padding:0">Already Passed: ${step3.i_have_already_passed}</p>

<a target="_blank" style="color:rgb(0,112,201);text-decoration:none;font-size:12px" href="http://localhost:3000/customer" data-saferedirecturl="http://localhost:3000/dashboard">Go to Dashboard</a><span style="margin-left:4px;margin-right:4px;color:rgb(51,51,51);font-weight:200">|</span><a target="_blank" style="color:rgb(0,112,201);text-decoration:none;font-size:12px" href="http://localhost:3000/customer/order" data-saferedirecturl="">View Order</a>
              </td>
              <td align="right" style="display:table-cell;padding:0px 20px 0px 0px;width:100px;vertical-align:top">
                <p style="font-size:12px;line-height:24px;margin:0;font-weight:600">Total Price: ${step6.amount}</p>
              </td>
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="width:100%;border:none;border-top:1px solid #eaeaea;margin:30px 0 0 0" />
    
        <p style="font-size:12px;line-height:auto;margin:20px 0;color:rgb(102,102,102);text-align:center"> To change your account details. If you have opted out, you can still view your receipts in your account under Order History. go to <a target="_blank" style="color:#067df7;text-decoration:none" href="#">Account Settings.</a></p>
        <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
          <tbody>
            <tr>
              <td>
              <td align="center" style="display:block;margin:40px 0 0 0"><img alt="Suja Icon" src="https://sujadrivingschool.co.uk/wp-content/uploads/2019/04/apple-icon-152x152.png" width="26" height="26" style="display:block;outline:none;border:none;text-decoration:none" /></td>
              </td>
            </tr>
          </tbody>
        </table>
        <p style="font-size:12px;line-height:24px;margin:8px 0 0 0;text-align:center;color:rgb(102,102,102)"><a target="_blank" style="color:#067df7;text-decoration:none" href="#">Account Settings</a> • <a target="_blank" style="color:#067df7;text-decoration:none" href="#">Terms of Sale</a> • <a target="_blank" style="color:#067df7;text-decoration:none" href="#">Privacy Policy </a></p>
        <p style="font-size:12px;line-height:24px;margin:25px 0 0 0;text-align:center;color:rgb(102,102,102)">Copyright © 2023 Suja Driving School. <br /> <a target="_blank" style="color:#067df7;text-decoration:none" href="">All rights reserved</a></p>
        </td>
        </tr>
        </table>
      </body>
      </html>
        `;
        
        

        try {
          // Send the email
          await sendMail("Suja Booking Receipt" , `m.waqas.ansari36@gmail.com, sharjeelkhanvmi@gmail.com,${step4.email}`, emailContent);

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