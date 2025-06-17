let express = require("express");
let cors = require("cors")

let mongoose = require("mongoose")
const { adminRoutes } = require("./App/routes/admin/adminRoutes");
const { adminModel } = require("./App/models/adminModel");
const { webRoutes } = require("./App/routes/web/webRoutes");
let app = express();

app.use(cors())
app.use(express.json())


require("dotenv").config()

app.use('/admin', adminRoutes) // http://localhost:8000/admin

app.use('/web', webRoutes) // http://localhost:8000/web


app.use("/uploads/category/", express.static("uploads/category/"))
//folder allow path fronted

app.use("/uploads/whychoose/", express.static("uploads/whychoose/"))

app.use("/uploads/subcategory/", express.static("uploads/subcategory/"))

app.use("/uploads/subsubcategory/", express.static("uploads/subsubcategory/"))

app.use("/uploads/product",express.static("uploads/product"))

mongoose.connect(`mongodb://127.0.0.1:27017/ecomfurniture`)

    .then(async (res) => {

        let checkAdmin = await adminModel.find() //[] ==0

        if (checkAdmin.length == 0) { //True
            adminModel.insertOne(
                {
                    adminEmail: process.env.ADMINEMAIL,
                    adminPassword: process.env.ADMINPASSWORD
                }
            )
        }
        console.log("Database Connect")
        app.listen(process.env.PORT)

    })
// http://localhost:8000