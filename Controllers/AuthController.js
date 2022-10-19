const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const user = require('../Models/UserModel')

// method : post
// url : api/auth/login
// acces : Public
const Login = (req, res) => {
    res.status(200).send("this a Login Function")
}

// method : post
// url : api/auth/register
// acces : Public
const register = async(req, res) => {

    console.log(req.body);
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        console.log('ok2');
        res.status(500).json({ message: 'Please ADD All Fields' })
    } else {
        console.log('ok3');
        res.json({ message: 'Register User' })
    }
    console.log('ok4');

}

// method : post
// url : api/auth/forgetpassword
// acces : Public
const ForgetPassword = (req, res) => {
    res.status(200).send('this a Forget Password function')
}

// method : post
// url : api/auth/resetpassword/:token
// acces : Public
const ResetPassword = (req, res) => {
    // token = req.params.id
    res.status(200).send('this a reset Password function of')
}



module.exports = {
    Login,
    register,
    ForgetPassword,
    ResetPassword
}