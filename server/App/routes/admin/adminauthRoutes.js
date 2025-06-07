let express=require("express");
const { adminLogin } = require("../../controllers/admin/adminauthControllers");



adminauthRoutes=express.Router();

adminauthRoutes.post('/login',adminLogin)


module.exports={adminauthRoutes}