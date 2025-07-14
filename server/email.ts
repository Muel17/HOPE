import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

export const sendContactEmail = async (name: string, email: string, message: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send the email to yourself
    subject: `New contact from ${name}`,
    text: `You have a new message from ${email}:\n\n${message}`,
  };

  await transporter.sendMail(mailOptions);
};