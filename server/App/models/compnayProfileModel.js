const mongoose = require("mongoose");

const companyProfileSchema = new mongoose.Schema({
    companyImage: String,

    companyName: {
        type: String,
        minlength: 2,
        unique: true,
        required: true
    },

    companyEmail: {
        type: String,
        unique: true,
        required: true
    },

    companyMobileNumber: {
        type: String,
        minlength: 10,
        maxlength: 10,
        required: true
    },

    companyFacebookLink: String,

    companyInstagrmaLink: String,

    companyYoutubeLink: String,

    companyAddress: {
        type: String,
        minlength: 5,
        required: true
    },

    companyMapLink: String
});

const companyModel = mongoose.model("companyProfile", companyProfileSchema);

module.exports = { companyModel };