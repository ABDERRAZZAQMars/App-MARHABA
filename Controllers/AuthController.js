const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../Models/UserModel')
const { sendConfirmationEmail, resetPasswordEmail } = require('../Utils/SendEmail')

// method : post
// url : api/auth/login
// acces : Public
const Login = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        if (user.verified == true) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        } else {
            res.status(401).json({ message: 'User not verified' })
        }
    } else {
        res.status(401).json({ message: 'Invalid Email Or Password' })
    }
})

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
        res.status(400).json({ message: 'User already exists' })
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
        if (user.verified == false) {
            sendConfirmationEmail(
                user.name,
                user.email,
                user.token,
                user.id,
                user.verified
            );
            return res.status(401).send({
                message: "Pending Account. Please Verify Your Email!"
            })
        }

    } else {
        res.status(400).json({ message: 'Invalid user data' })
    }

})

// method : post
// url : api/auth/forgetpassword
// acces : Public
const ForgetPassword = asyncHandler(async(req, res) => {
    const { email } = req.body
    if (!email) {
        res.status(400).json({
            message: 'Please ADD field'
        })
    }
    const user = await User.findOne({ email })
    if (user) {
        const token = generateToken(user._id)
        user.token = token
        user.save()
        await resetPasswordEmail(user.name, user.email, user.token)
        res.status(200).send('plaise check your email for reset your password of email ')
    }
    res.status(400).json({ message: 'Invalid email' })
})

// method : post
// url : api/auth/resetpassword/:token
// acces : Public
const ResetPassword = asyncHandler(async(req, res) => {
    const token = req.params.token
    const { password, password2 } = req.body
    if (!password || !password2) {
        res.status(400).json({
            message: 'Please ADD field'
        })
        console.log('Ok1');
    } else if (password != password2) {
        res.status(400).json({
            message: 'Password not match'
        })
        console.log('Ok2');
    }
    const user = await User.findOne({ token })
    if (user) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        user.password = hashedPassword
        user.save()
        res.status(200).json({
            message: 'Your Password is Reset'
        })
        console.log('Ok3');
    } else {
        res.status(400).json({
            message: 'Token not valide'
        })
        console.log('Ok4');
    }
})

// Generate JSON WEB TOKEN (JWT)
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '10m',
    })
}

// Verify Token
const Verify = async(req, res) => {
    const token = req.params.token
    const id = req.params.id
    console.log(id)
    console.log(token)
    const user = await User.findById(id)
    if (user.verified == false && user.token == token) {
        user.verified = true
        user.save()
        res.status(200).send('your account is verified')
    } else {
        res.status(400).send('token not valid')
    }
}

module.exports = {
    Login,
    register,
    ForgetPassword,
    ResetPassword,
    Verify
}