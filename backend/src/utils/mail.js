import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL, // your mail address
    pass: process.env.NODEMAILER_APP_PASSWORD, // your 16 didgit app password
  },
});


// function to send email
export const sendOtpMail = async (to,otp, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from:  `vStore Support"  ${process.env.EMAIL}`,
      to,
      subject : 'Reset your password',
    //   text,  // plain text version
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #007bff;">Your OTP Code</h2>
          <p>Hello,</p>
          <p>Your One-Time Password (OTP) for <strong>${subject}</strong> is:</p>
          <div style="font-size: 24px; font-weight: bold; color: #000; margin: 10px 0;">
            ${otp}
          </div>
          <p>This OTP is valid for <strong>5 minutes</strong>.</p>
          <p>If you didn’t request this, you can ignore this email.</p>
          <hr/>
          <p style="font-size: 12px; color: #888;">– vStore Team</p>
        </div>
      `
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};





