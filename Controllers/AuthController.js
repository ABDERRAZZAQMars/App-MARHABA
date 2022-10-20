const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../Models/UserModel')

// method : post
// url : api/auth/login
// acces : Public
const Login = (req, res) => {
    res.status(200).send("this a Login Function")
}

// method : post
// url : api/auth/register
// acces : Public
const register = asyncHandler(async(req, res) => {
    const { name, email, password, token, verified } = req.body
    if (!name || !email || !password) {
        res.status(400).json({ message: 'Please ADD All Fields' })
    }

    // Check if user exists
    userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hashed Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        token: generateToken(),
        verified
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
            verified: user.verified
        })

    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})

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

// Generate JSON WEB TOKEN (JWT)
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '10m',
    })
}

module.exports = {
    Login,
    register,
    ForgetPassword,
    ResetPassword,
}