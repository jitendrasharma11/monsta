const express = require("express");
const multer = require('multer');
const path = require('path');

const {
    subsubcategoryInsert,
    subsubcategoryView,
    subsubcategorySingleView,
    subsubcategoryUpdate,
    subsubcategoryMultiDelete,
    subsubcategoryStatus,
    parentCategory,
    subCategory
} = require("../../controllers/admin/subsubcategoryControllers");

// Multer config for subsubcategory image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/subsubcategory");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

let subsubcategoryRoutes = express.Router();


subsubcategoryRoutes.post('/insert', upload.single('subsubcategoryImage'), subsubcategoryInsert);


subsubcategoryRoutes.get('/view', subsubcategoryView);


subsubcategoryRoutes.get('/edit-row-data/:id', subsubcategorySingleView);


subsubcategoryRoutes.put('/update/:id', upload.single('subsubcategoryImage'), subsubcategoryUpdate);


subsubcategoryRoutes.post('/delete', subsubcategoryMultiDelete);


subsubcategoryRoutes.post('/change-status', subsubcategoryStatus);


subsubcategoryRoutes.get('/parentcategory', parentCategory);


subsubcategoryRoutes.get('/subcategory', subCategory);

module.exports = { subsubcategoryRoutes };