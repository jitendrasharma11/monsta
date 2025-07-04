let express = require("express");
const { getFaq } = require("../../controllers/web/faqControllers");


let faqRoutes = express.Router();

faqRoutes.get('/getFaq', getFaq);


module.exports = { faqRoutes };