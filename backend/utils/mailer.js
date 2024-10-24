const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendResetEmail = async (to, token) => {
  const url = `http://localhost:3000/reset-password/${token}`;
  await transporter.sendMail({
    to,
    subject: "Password Reset for ZeeTech",
    html: `<p>You requested a password reset.</p>
               <p>Click this <a href="${url}">${url}</a> to set a new password.</p>`,
  });
};

module.exports = { sendResetEmail };
