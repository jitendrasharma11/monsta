const mongoose = require("mongoose");
const slugify = require("slugify");

let sliderSchema = new mongoose.Schema({
    sliderTitle: {
        type: String,
        unique: true,
        required: true,
        minLength: 2,
        maxLength: 20
    },
    sliderImage: String,
    sliderOrder: Number,
    sliderStatus: Boolean,
    slug: String
});

sliderSchema.pre('save', function (next) {
    this.slug = slugify(this.sliderTitle, { lower: true });
    next();
});

const sliderModel = mongoose.model("slider", sliderSchema);
module.exports = { sliderModel };
