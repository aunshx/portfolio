const moment = require("moment");
const config = require("config");
const sgMail = require("@sendgrid/mail")

const sendGridKey = config.get("sendGridAPIKeyEmail");

const sendEmail = async (email, name, organisation, message) => {
    sgMail.setApiKey(sendGridKey);
    const msg = {
      to: "aunsh.tech@gmail.com", // Change to your recipient
      from: "ceo@aunsh.com", // Change to your verified sender
      subject: "Test",
      text: "New Message",
      html: `
        <!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    table, td, div, h1, p {font-family: Arial, sans-serif;}
  </style>
</head>
<body style="margin:0;padding:0;">
  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
          <tr style="height: 10px;">
            <td align="center" style="padding:5px 0 5px 0;background:#546670;">
                <img src='https://i.postimg.cc/qB6VG513/a-removebg-preview.png' alt="" width="40" style="height:auto;display:block;" />
                <h1 style="font-size:20px;margin:5px 0 5px 15px;font-family:Arial,sans-serif;color:#fff;">New Message</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 30px 25px 30px;">
              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                <tr>
                  <td style="padding:0 0 0px 0;color:#153643;" align="center">
                    <h1 style="font-size:14px;margin:0 0 20px 0;font-family:Arial,sans-serif; color: rgb(78, 170, 219);">Name: </h1>
                    <h1 style="font-size:14px;margin:0 0 20px 0;font-family:Arial,sans-serif; color: rgb(59, 58, 58);">${name}</h1>
                    <h1 style="font-size:14px;margin:0 0 20px 0;font-family:Arial,sans-serif; color: rgb(78, 170, 219);">Email: </h1>
                    <h1 style="font-size:14px;margin:0 0 20px 0;font-family:Arial,sans-serif; color: rgb(59, 58, 58);">${email}</h1>
                    <h1 style="font-size:14px;margin:0 0 20px 0;font-family:Arial,sans-serif; color: rgb(78, 170, 219);">Organisation: </h1>
                    <h1 style="font-size:14px;margin:0 0 20px 0;font-family:Arial,sans-serif; color: rgb(59, 58, 58);">${organisation}</h1>
                    <h1 style="font-size:14px;margin:0 0 20px 0;font-family:Arial,sans-serif; color: rgb(78, 170, 219);">Message: </h1>
                    <h1 style="font-size:14px;margin:0 0 20px 0;font-family:Arial,sans-serif; color: rgb(59, 58, 58);">${message}</h1>
                    
                    <p style="margin:40px 0 0px 0;font-size:14px;line-height:24px;font-family:Arial,sans-serif; color: gray;">Date: ${moment().format(
                      "DD/MM/YYYY"
                    )} | Time: ${moment().format("hh:mm a")}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };


  sgMail.send(msg)
    .then(() => {
      console.log('Email Sent');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  sendEmail,
};
