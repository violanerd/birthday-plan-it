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

const mailOptions = {
    from: 'birthdayplanit@yahoo.com', // Sender address
    to: 'madalyne.cross@gmail.com', // List of recipients
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

function sendEmail() {
    transport.sendMail(mailOptions, function(err, info) {
        // if (err) {
        //   res.json({status: "fail"})
        // } else {
        //   res.json({status: "yes"})
        // }
      if (err) {
        return err
      } else {
        return "Success"
      }
      }
)}
module.exports = sendEmail;