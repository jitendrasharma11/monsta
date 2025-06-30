let express=require("express")
const { userauthRoutes } = require("./userAuthRoutes")
const { homePageRoutes } = require("./homePageRoutes")


let webRoutes=express.Router()

webRoutes.use('/user',userauthRoutes)
webRoutes.use('/home',homePageRoutes)



module.exports={webRoutes}