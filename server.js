require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const db = require('./Config/db')
const Authentification = require('./Routes/AuthRoute');
const Manager = require('./Routes/ManagerRoute');
const Livreur = require('./Routes/LivreurRoute');
const Client = require('./Routes/ClientRoute');
const errorHandler = require('./Middlewares/errorHandler');
const { tryCatch } = require('./Utils/tryCatch');



//Authentification_Route
app.use('/api/auth', Authentification);
//Manger_Route
app.use('/api/user/manager', Manager);
//Livreur_Route
app.use('/api/user/livreur', Livreur);
//Client_Route
app.use('/api/user/client', Client);



const getUser = () => undefined;

app.get('/test', tryCatch(async(req, res) => {
    const user = getUser();
    if (!user) {
        throw new Error("User not found");
    }
    return res.status(200).json({ success: true });
}));



app.use(errorHandler);

const port = process.env.PORT || 8081
app.listen(port, (err) => {
    if (!err) {
        console.log(`the port ${port} is running`)
    } else {
        console.log(err)
    }
});