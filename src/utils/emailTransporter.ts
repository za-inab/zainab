import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const getEmailOptions = (subject: string, body: string) => {
  return {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: subject,
    text: body,
  };
};
