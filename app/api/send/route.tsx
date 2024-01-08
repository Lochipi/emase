const nodemailer = require("nodemailer");

nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: "username",
    pass: "password",
  },
});
