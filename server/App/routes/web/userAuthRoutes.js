let express=require("express");
const { register } = require("../../controllers/web/userAuthControllers");



userauthRoutes=express.Router(); // http://localhost:8000/web/user


userauthRoutes.post('/register',register)


module.exports={userauthRoutes}