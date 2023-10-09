var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
    var transport = nodemailer.createTransport({
        host: process.env.SMTPHOST,
        port: process.env.SMTPPORT,
        auth: {
          user: process.env.SMTPUSERNAME,
          pass: process.env.SMTPPASSWORD
        }
      });

  let mailOptions = {
    from: process.env.SMTPUSERNAME,
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

export const register_user = async (formData) => {
  try {
      const res = await fetch('/api/auth/register', {
          headers: {
              'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(formData),
      });
      const data = res.json();
      return data;
  } catch (error) {
      console.log('Error in register_user (service) => ', error);
      return error.message
  }
};


export const login_user = async (formData) => {
  try {
      const res = await fetch('/api/auth/login', {
          headers: {
              'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(formData),
      });
      const data = res.json();
      return data;
  } catch (error) {
      console.log('Error in login_user (service) => ', error);
      console.log('CUSTOM SYSTUMMMM ',res,formData);
      return error.message
  }
};