//config inicial

const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

//forma de ler json /middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//rotas da api
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

//criar uma rota inicial /endpoint
app.get('/', (req, res) =>{
    //mostrar req
    res.json({message:'testando express'})
})

//entregar uma porta para o express saber onde ele vai acessar

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.qid0wb6.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
.then(() => {
    console.log("testando mongoDB");
    app.listen(3000);
})
.catch((err) => console.log(err));
    

