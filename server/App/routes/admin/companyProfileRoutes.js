let express = require("express");
let multer = require("multer");
const {
  companyProfileAdd,
  companyProfileView,
  companyProfileEdit,
} = require("../../controllers/admin/companyProfileController");

let companyProfileRoutes = express.Router();

// Multer Storage Setup
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/companyProfile");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

let upload = multer({ storage: storage });

// Routes
companyProfileRoutes.post("/add", upload.single("companyImage"), companyProfileAdd);
companyProfileRoutes.get("/view", companyProfileView);
companyProfileRoutes.put("/edit", upload.single("companyImage"), companyProfileEdit);

module.exports = { companyProfileRoutes };