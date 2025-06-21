let express=require("express");
const { register, login, changePassword } = require("../../controllers/web/userAuthControllers");
const multer = require("multer");
const { checkToken } = require("../../middleware/checkToken");



userauthRoutes=express.Router(); // http://localhost:8000/web/user


let uploads=multer()

userauthRoutes.post('/register',uploads.none(),register)

userauthRoutes.post('/login',uploads.none(),login)

userauthRoutes.post('/change-password',checkToken,changePassword)


module.exports={userauthRoutes}