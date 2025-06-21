const bcrypt = require('bcrypt');
const { userModel } = require('../../models/userModel');
let jwt = require('jsonwebtoken');
const saltRounds = 10;

let register = async (req, res) => {
    let { name, number, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, saltRounds);

    console.log(hashPassword);

    let resObj;

    try {
        let insertObj = {
            userName: name,
            userEmail: email,
            userPassword: hashPassword,
            userPhone: number
        };

        let user = await userModel.create(insertObj);

        resObj = {
            status: 1,
            msg: "user created",
            user,
        };
    } catch (error) {
        resObj = {
            status: 0,
            msg: "Mail Id all ready exists",
        };
    }

    res.send(resObj);
};

let login = async (req, res) => {
    let myRes
    let { email, password } = req.body;

    let cheakEmail = await userModel.findOne({ userEmail: email })
    if (cheakEmail) {

        let dbPassword = cheakEmail.userPassword

        if (bcrypt.compareSync(password, dbPassword)) {

            let user = {
                userName: cheakEmail.userName,
                _id: cheakEmail._id
            }

            let token = jwt.sign(user,process.env.TOKENKEY);

            myRes = {
                status: 1,
                msg: "login Success",
                user,
                token
            }
        }
        else {
            myRes = {
                status: 0,
                msg: "Invalid Password"
            }
        }
    }
    else {
        myRes = {
            status: 0,
            msg: "Invalid Email Address"
        }
    }
    res.send(myRes)
}

let changePassword=(req,res)=>{
    console.log(req.body)
    res.send("Hello")
}

module.exports = { register, login, changePassword };