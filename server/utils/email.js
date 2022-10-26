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


async function sendEmail(maillist) {
  const mailOptions = {
    from: 'birthdayplanit@yahoo.com', // Sender address
    to: maillist, // List of recipients
    subject: 'Test Test', // Subject line
    text: 'Testing', // Plain text body
    html: "<h1>Look at my invite</h1><p>Invite link</p>",
    // attachments: [
    //     {
    //         filename: "greenmountains.jpg",
    //         path: './greenmountains.jpg'
    //     }
    // ]
    };
    try {
      let info = await transport.sendMail(mailOptions) 
      return info.messageId
    } catch (err) {
      console.log("Error", err)
    }
}

module.exports = sendEmail;

// working
// function sendEmail(maillist) {
//   const mailOptions = {
//     from: 'birthdayplanit@yahoo.com', // Sender address
//     to: maillist, // List of recipients
//     subject: 'Test Test', // Subject line
//     text: 'Testing', // Plain text body
//     html: "<h1>Look at my invite</h1><p>Invite link</p>",
//     // attachments: [
//     //     {
//     //         filename: "greenmountains.jpg",
//     //         path: './greenmountains.jpg'
//     //     }
//     // ]
//     };
//     transport.sendMail(mailOptions, function(err, info) {
//       if (err) {
//         return err
//       } else {
//         return "Success"
//       }
//       }
// )}