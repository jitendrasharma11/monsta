let express=require("express")
const { userauthRoutes } = require("./userAuthRoutes")


let webRoutes=express.Router()

webRoutes.use('/user',userauthRoutes)



module.exports={webRoutes}