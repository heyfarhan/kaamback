require('dotenv').config();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    }
});

const sendOtp = async (userEmail, otp, purpose) => {

    let template = {
        signUp: {
            subject: 'Email Verification - KaamBack',
            html: `<div style="text-align: center;font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px;">
                    <img src="https://cdn.glitch.global/400d48ec-64c7-4300-94a6-b03e831f3d48/KaamBack%20(2)-CIx_-HhR.png?v=1726765769496" alt="Welcome" style="max-width: 100%; height: auto; border-radius: 10px;">
                    <h2 style="text-align: center; color: #333;">Welcome to KaamBack!</h2>
                    <p style="font-size: 16px; color: #555;">Your OTP is</p>
                    <h1><strong>${otp}</strong></h1>
                    <p style="font-size: 16px; color: #555;text-align: center;">It will expire in 10 minutes.</p>
                    <p style="font-size: 16px; color: #555;">Please click the link below to verify your email address:</p>
                    <p style="text-align: center;">
                        <a href="#" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #007bff; border-radius: 5px; text-decoration: none;">Verify Email</a>
                        </p>
                        <p style="font-size: 14px; color: #888; text-align: center;">If you did not request this, please ignore this email.</p>
                        </div>`
        },
        forgot: {
            subject: 'Password Reset Request - KaamBack',
            html: ` <div style="text-align: center;font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px;">
            <img src="https://cdn.glitch.global/400d48ec-64c7-4300-94a6-b03e831f3d48/KaamBack%20(2)-CIx_-HhR.png?v=1726765769496" alt="Welcome" style="max-width: 100%; height: auto; border-radius: 10px;">
            <h2 style="text-align: center; color: #333;">Reset Your Password</h2>
                    <p style="font-size: 16px; color: #555;">We received a request to reset your password. Your OTP is:</p>
                    <h1><strong>${otp}</strong></h1>
                    <p style="font-size: 16px; color: #555;">This OTP is valid for 10 minutes.</p>
                    <p style="font-size: 16px; color: #555;">Please use this OTP to reset your password. If you did not request this, you can safely ignore this email.</p>
                    <p style="font-size: 14px; color: #888; text-align: center;">If you did not request this, please ignore this email.</p>
                </div>`
        },
    }
    const mailOptions = {
        from: process.env.NODEMAILER_USER,
        to: userEmail,
        subject: (purpose === 'signUp') ? (template.signUp.subject) : (template.forgot.subject),
        html: (purpose === 'signUp') ? (template.signUp.html) : (template.forgot.html),
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }

}

module.exports = sendOtp