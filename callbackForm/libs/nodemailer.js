const nodemailer =require("nodemailer");
const path= require("path");
const SMTPTransport = require("nodemailer/lib/smtp-transport");

const MyNodeMailer = async  (data)=>{
  
  const transporter = nodemailer.createTransport( new SMTPTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth:{
      user:"uzregxurshid@mail.ru",
      pass:"0TRgeP6G12Q758rvELa5"
    }
  }));

  const info  = await transporter.sendMail({
    from: 'uzregxurshid@mail.ru', // sender address
    to: `uzregxurshid@gmail.com, ${data.email}`, // list of receivers
    subject: `Hello ${data.firstname}`, // Subject line
    text: `Hello ${data.firstname} we read your message "${data.text}" thank you you are crazy`, // plain text body
    html: `<html>Hello world Mr <b>${data.firstname}</b> your text "${data.text}"</html>`, // html body
    attachments:[
      {
        filename:"MyRoutes.TXT",
        path:path.resolve(__dirname, "../controller/routes/routes.js")
      }
    ]
  }); 
  console.log("Message sent: %s", info.messageId);

};


module.exports = MyNodeMailer;
