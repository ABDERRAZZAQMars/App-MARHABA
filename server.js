require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const Authentification = require('./Routes/AuthRoute');
const Manager = require('./Routes/ManagerRoute');
const Livreur = require('./Routes/LivreurRoute');
const Client = require('./Routes/ClientRoute');


//Authentification_Route
app.use('/api/auth', Authentification);
//Manger_Route
app.use('/api/user/manager', Manager);
//Livreur_Route
app.use('/api/user/livreur', Livreur);
//Client_Route
app.use('/api/user/client', Client);


const port = process.env.PORT || 8081
app.listen(port, (err) => {
    if (!err) {
        console.log(`the port ${port} is running`)
    } else {
        console.log(err)
    }
})