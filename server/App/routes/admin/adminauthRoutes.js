let express=require("express");
const { adminLogin, forgotSendOTP, verifyOTP, resetPassword, changePassword } = require("../../controllers/admin/adminauthControllers");


adminauthRoutes=express.Router();

adminauthRoutes.post('/login',adminLogin)

adminauthRoutes.post('/send-otp',forgotSendOTP) //

adminauthRoutes.post('/verify-otp',verifyOTP)

adminauthRoutes.post('/reset-password',resetPassword)

// After Login Work
adminauthRoutes.post('/change-password',changePassword)

module.exports={adminauthRoutes}