// method : post
// url : api/auth/login
// acces : Public
const Login = (req, res) => {
    res.status(200).send("this a Login Function")
}

// method : post
// url : api/auth/register
// acces : Public
const Register = (req, res) => {
    res.status(200).send('this a register function')
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
    Register,
    ForgetPassword,
    ResetPassword
}