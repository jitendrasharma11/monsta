let mongoose = require("mongoose")
let userSchema = new mongoose.Schema({
    userName:String,
    userEmail: {
        type: String,
        unique: true,
        required: true,
        minLength: 2,
        maxLength: 50,

    },
    userPassword: String,
    userPhone: String,
    userAddress: String,
    userGender: String,

},{
    timestamps:true
})

let userModel = mongoose.model("user", userSchema)
module.exports = { userModel }