let express=require("express")
const { userauthRoutes } = require("./userAuthRoutes")
const { homePageRoutes } = require("./homePageRoutes")
const { cartRoutes } = require("./cartRoutes")
const { orderRoute } = require("./orderRoutes")


let webRoutes=express.Router()

webRoutes.use('/user',userauthRoutes) //http://localhost:8000/web/user/
webRoutes.use('/home',homePageRoutes) //http://localhost:8000/web/home/
webRoutes.use('/cart',cartRoutes) //http://localhost:8000/web/cart/
webRoutes.use('/order',orderRoute) //http://localhost:8000/web/order/
webRoutes.use('/order',orderRoute) //http://localhost:8000/web/order/




module.exports={webRoutes}