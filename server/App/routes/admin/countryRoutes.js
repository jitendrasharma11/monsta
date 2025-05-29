let express = require("express")
const { countryAdd, countryUpdate, CountrySingleView, countryDelete, countryMultiDelete, countryView, changeStatus } = require("../../controllers/admin/countryController")


let countryRoutes = express.Router()


countryRoutes.post("/add", countryAdd)

countryRoutes.get("/view", countryView)

countryRoutes.get("/view/:id", CountrySingleView)

countryRoutes.put("/update/:id", countryUpdate)

countryRoutes.delete("/delete/:id", countryDelete)

countryRoutes.post("/delete", countryMultiDelete)

countryRoutes.delete("/multi-delete", countryMultiDelete)

countryRoutes.get("/edit-row-data/:id", CountrySingleView)

countryRoutes.post("/change-status",changeStatus)

module.exports = { countryRoutes }