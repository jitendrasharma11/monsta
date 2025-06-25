let express = require("express");
const { register, login, changePassword, getUser, updateUserProfile, googleLogincreate } = require("../../controllers/web/userAuthControllers");
const multer = require("multer");
const { checkToken } = require("../../middleware/checkToken");



userauthRoutes=express.Router(); // http://localhost:8000/web/user


let uploads=multer()

userauthRoutes.post('/register',uploads.none(),register)

userauthRoutes.post('/login',uploads.none(),login)

userauthRoutes.post('/create-user-google-login',googleLogincreate)

userauthRoutes.post('/change-password',checkToken,changePassword)

userauthRoutes.post('/data',checkToken,getUser)

userauthRoutes.post('/update-profile', checkToken ,updateUserProfile);

module.exports={userauthRoutes}