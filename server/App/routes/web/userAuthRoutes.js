let express=require("express");
const { register, login } = require("../../controllers/web/userAuthControllers");
const multer = require("multer");



userauthRoutes=express.Router(); // http://localhost:8000/web/user


let uploads=multer()

userauthRoutes.post('/register',uploads.none(),register)

userauthRoutes.post('/login',uploads.none(),login)


module.exports={userauthRoutes}