const mongoose = require("mongoose");

const whychooseSchema = new mongoose.Schema({
    whychooseTitle: {
        type: String,
        unique: true,
        required: true,
        minLength: 2,
        maxLength: 20,
    },
    whychooseImage: String,
    whychooseOrder: Number,
    whychooseStatus: {
        type: Boolean,
        default: true,
    },
    whychooseDescription: {
        type: String,
        maxLength: 500,
    },
});

const whychooseModel = mongoose.model("whychoose", whychooseSchema);
module.exports = { whychooseModel };