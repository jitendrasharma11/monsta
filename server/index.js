let express = require("express");
let cors = require("cors")

let mongoose = require("mongoose")
const { adminRoutes } = require("./App/routes/admin/adminRoutes");
let app = express();

app.use(cors())
app.use(express.json())


require("dotenv").config()

app.use('/admin', adminRoutes) // http://localhost:8000/admin


app.use("/uploads/category/", express.static("uploads/category/"))
//folder allow path fronted

app.use("/uploads/whychoose/", express.static("uploads/whychoose/"))

mongoose.connect(`mongodb://127.0.0.1:27017/ecomfurniture`)
    .then((res) => {
        console.log("DB Connect")
        app.listen(process.env.PORT)

    })
// http://localhost:8000