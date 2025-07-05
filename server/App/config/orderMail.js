const nodemailer = require('nodemailer');

const orderMail = async (to, subject, html) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        let info = await transporter.sendMail({
            from: `"Monsta Furniture" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html
        });

        console.log("Mail sent successfully:", info.messageId);
        return true;
    } catch (error) {
        console.error("Mail sending failed:", error);
        return false;
    }
    console.log("Sending mail to:", to);
};



module.exports = orderMail;