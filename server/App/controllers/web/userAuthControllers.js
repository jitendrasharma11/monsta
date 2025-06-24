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

            let token = jwt.sign(user, process.env.TOKENKEY);

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

let changePassword = async (req, res) => {
    let resObj

    let { oldPassword, newPassword, confirmPassword, userId } = req.body
    let userData = await userModel.findOne({ _id: userId })
    let dbPassword = userData.userPassword //DB Password
    if (bcrypt.compareSync(oldPassword, dbPassword)) {

        if (newPassword == confirmPassword) {
            //change password
            const hashPassword = bcrypt.hashSync(newPassword, saltRounds);
            await userModel.updateOne({ _id: userId }, {
                $set: {
                    userPassword: hashPassword
                }
            })
            resObj = {
                status: 1,
                msg: "Password Changed"
            }
        }
        else {
            resObj = {
                status: 0,
                msg: "New Password or old Password Not Match"
            }
        }

    }
    else {
        resObj = {
            status: 0,
            msg: "Invalid old password"
        }
    }

    res.send(resObj)
}
let getUser = async (req, res) => {
    let { userId } = req.body
    let userData = await userModel.findOne({ _id: userId })
    resObj = {
        status: 0,
        userData
    }
    res.send(resObj)
}

let updateUserProfile = async (req, res) => {
    try {
         let { userId, address, name, gender } = req.body
         console.log(req.body)

        await userModel.updateOne({ _id: userId }, {
            $set: {
                userAddress: address,
                userName: name,
                userGender: gender
            }
        });

        res.json({ status: 1, msg: "Profile updated successfully" });

    } catch (err) {
        console.error("Update Error:", err);
        res.status(500).json({ status: 0, msg: "Server error" });
    }
};

module.exports = { register, login, changePassword, getUser, updateUserProfile };