const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    }
});

const sendOtp = async (userEmail, otp) => {

    const mailOptions = {
        from: process.env.NODEMAILER_USER,
        to: userEmail,
        subject: 'OTP Verification',
        html: `
            <div style="text-align: center;font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px;">
                    <img src="https://media.licdn.com/dms/image/D4D3DAQGfufDlQFcbSg/image-scale_191_1128/0/1719331190087/kaamback_cover?e=1723269600&v=beta&t=3s6hT4oEcEe_mZVd0AT2ON8TTHFRPaaZDePZNSlmmwI" alt="Welcome" style="max-width: 100%; height: auto; border-radius: 10px;">
                    <h2 style="text-align: center; color: #333;">Welcome to KaamBack!</h2>
                    <p style="font-size: 16px; color: #555;">Your OTP is</p>
                    <h1><strong>${otp}</strong></h1>
                    <p style="font-size: 16px; color: #555;text-align: center;">It will expire in 10 minutes.</p>
                <p style="font-size: 16px; color: #555;">Please click the link below to verify your email address:</p>
                <p style="text-align: center;">
                    <a href="https://kaamback.com/" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #007bff; border-radius: 5px; text-decoration: none;">Verify Email</a>
                </p>
                <p style="font-size: 14px; color: #888; text-align: center;">If you did not request this, please ignore this email.</p>
            </div>
  `,
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