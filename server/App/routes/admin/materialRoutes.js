let express = require("express");
const { materialInsert, materialView, materialDelete, materialmultiDelete, changeStatus, singlematerialView, updatematerial } = require("../../controllers/admin/materialControllers");
let materialRoutes = express.Router();

materialRoutes.post("/insert", materialInsert)

materialRoutes.get("/view", materialView)

materialRoutes.delete("/delete/:id", materialDelete)

materialRoutes.post("/delete", materialmultiDelete)

materialRoutes.post("/change-status",changeStatus)

materialRoutes.get("/edit-row-data/:id", singlematerialView)

materialRoutes.put("/update/:id", updatematerial)

module.exports = {materialRoutes}