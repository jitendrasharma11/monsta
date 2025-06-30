let express=require("express")
const { userauthRoutes } = require("./userAuthRoutes")
const { homePageRoutes } = require("./homePageRoutes")
const { cartRoutes } = require("./cartRoutes")


let webRoutes=express.Router()

webRoutes.use('/user',userauthRoutes) //http://localhost:8000/web/user/
webRoutes.use('/home',homePageRoutes) //http://localhost:8000/web/home/
webRoutes.use('/cart',cartRoutes) //http://localhost:8000/web/cart/




module.exports={webRoutes}