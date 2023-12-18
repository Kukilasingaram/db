//import express from 'express';
const express = require ('express');
const dotenv=require('dotenv');
//const dbconnection = require('./db.js');
const mongo =require('./db.js')
const cors=require('cors')
const router=require('./router/router')
const port=process.env.PORT || 8000;

const app = express();
app.use(cors({origin:"*",credentials : true}))
dotenv.config();

app.use(express.json());

const PORT = 8000;
mongo.connect();

//dbconnection();

app.get("/",(req,res) => {
    res.send("Server response given")
});

app.use('/api',router)

app.listen(PORT,() => console.log(`Server Listening in port ${PORT}`));