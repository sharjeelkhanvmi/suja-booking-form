var nodemailer = require("nodemailer");
require('dotenv').config();
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
    var transport = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
          user: "sharjeelkhanvmi@gmail.com",
          pass: "LZ1KBsEDn4NzAxwO"
        }
      });

  let mailOptions = {
    from: "sharjeelkhanvmi@gmail.com",
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error)
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}