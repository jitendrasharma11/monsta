let express = require("express");

const { colorInsert, colorView, colorDelete, updateColor, singlecolorView, colormultiDelete, changeStatus } = require("../../controllers/admin/colorControllers");
let colorRoutes = express.Router();

colorRoutes.post("/insert", colorInsert)

colorRoutes.get("/view", colorView)
colorRoutes.get("/view/:id",singlecolorView)
colorRoutes.delete("/delete/:id", colorDelete)
colorRoutes.post("/delete", colormultiDelete)
// colorRoutes.post("/multi-delete/",colormultiDelete)
colorRoutes.put("/update/:id",updateColor)
colorRoutes.get("/edit-row-data/:id",singlecolorView)

colorRoutes.post("/change-status",changeStatus)

module.exports = { colorRoutes }
