const jwt = require("jsonwebtoken")

const User = require("../models/user.model")

const encrypt = require("../utils/encrypt")
const sendOtp = require("../utils/sendOtp")
const validateOtp = require("../utils/validateOtp")

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            status: "false",
            message: "Email is required",
        });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                status: "false",
                message: "Email not found",
            });
        }
        else {
            const otp = String(Math.floor(Math.random() * 9000) + 1000);

            const encryptedOtp = await encrypt(otp);

            user.otp = encryptedOtp;
            user.iat = new Date();
            await user.save();

            sendOtp(user.email, otp, "forgotPassword");

            return res.status(200).json({
                status: "true",
                message: "OTP sent to email successfully",
            });
        }
    }
    catch (error) {

        res.status(500).json({
            status: "false",
            message: "Server error",
            error: error.message,
        });
    }
};

const forgotPasswordOtpVerify = async (req, res) => {

    const { otp, email } = req.body;

    try {
        if (!otp || !email) {
            return res.status(400).json({
                status: "false",
                message: "OTP and email are required",
            });
        }

        const verifiedUser = await User.findOne({ email });

        if (!verifiedUser) {
            return res.status(404).json({
                status: "false",
                message: "User not found",
            });
        }

        const isValidOtp = await validateOtp(otp, verifiedUser);

        if (!isValidOtp) {
            return res.status(400).json({
                status: "false",
                message: "Invalid or expired OTP",
            });
        }

        const token = jwt.sign(
            { id: verifiedUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' });

        res.cookie('token', token, {
            httpOnly: true,
            // secure: true,
            domain: '.kaamback.com',
            maxAge: 60 * 60 * 1000,
        })

        res.status(200).json(
            {
                status: "true",
                user: { _id: verifiedUser._id, name: verifiedUser.name, email: verifiedUser.email, dateOfBirth: verifiedUser.dateOfBirth, role: verifiedUser.role },
                message: "OTP validated successfully. Proceed to password change.",
            })

    } catch (error) {
        return res.status(500).json({
            status: "false",
            message: "Server error",
            error: error.message,
        });
    }
};

const setNewPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        if (!email || !newPassword) {
            return res.status(400).json({
                status: "false",
                message: "Email and new password are required",
            });
        }

        const hashedPassword = await encrypt(newPassword);

        const user = await User.findOneAndUpdate({ email }, { password: hashedPassword }, { new: true });

        if (!user) {
            return res.status(404).json({
                status: "false",
                message: "User not found",
            });
        }

        return res.status(200).json({
            status: "true",
            message: "Password updated successfully",
        });

    } catch (error) {
        return res.status(500).json({
            status: "false",
            message: "Server error",
            error: error.message,
        });
    }
};



module.exports = {
    forgotPassword,
    forgotPasswordOtpVerify,
    setNewPassword
}