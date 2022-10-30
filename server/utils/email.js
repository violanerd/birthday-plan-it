require('dotenv').config();

const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  });


async function sendEmail(maillist, id) {
  const mailOptions = {
    from: 'birthdayplanit@yahoo.com', // Sender address
    to: maillist, // List of recipients
    subject: "You've been invited!", // Subject line
    //text: 'Testing', // Plain text body
    html: `<h1>RSVP to your invitation here:</h1><a href='https://birthdayplanit.herokuapp.com/rsvp/${id}' target='_blank'>RSVP link</a>`,
    };
    console.log(mailOptions.html)
    try {
      let info = await transport.sendMail(mailOptions) 
      return info.messageId
    } catch (err) {
      console.log("Error", err)
    }
}

module.exports = sendEmail;
