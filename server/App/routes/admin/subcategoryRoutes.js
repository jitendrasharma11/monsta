const express = require("express");
const multer = require('multer');
const path = require('path');

const {
    subcategoryInsert,
    subcategoryView,
    subcategorySingleView,
    subcategoryUpdate,
    subcategoryMultiDelete,
    subcategoryStatus,
    parentCategory
} = require("../../controllers/admin/subcategoryControllers");

// Multer storage config for subcategory images
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/subcategory");
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

let subcategoryRoutes = express.Router();

// Insert new subcategory with image upload
subcategoryRoutes.post('/insert', upload.single('subcategoryImage'), subcategoryInsert);

// View all subcategories (pagination + search)
subcategoryRoutes.get('/view', subcategoryView);

// Get single subcategory details for edit form
subcategoryRoutes.get('/edit-row-data/:id', subcategorySingleView);

// Update subcategory by id with optional image upload
subcategoryRoutes.put('/update/:id', upload.single('subcategoryImage'), subcategoryUpdate);

// Multi delete subcategories
subcategoryRoutes.post('/delete', subcategoryMultiDelete);

// Toggle status of subcategories
subcategoryRoutes.post('/change-status', subcategoryStatus);

// Get parent categories (active ones) for dropdown
subcategoryRoutes.get('/parentcategory', parentCategory);

module.exports = { subcategoryRoutes };