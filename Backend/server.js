const express  = require('express');
const app = express();
require('dotenv').config();
const task = require('./routes/router');
const connectDB = require('./db/connect');

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : false}));
app.use('/static',express.static('./public'))
app.use('/',task);




const port = process.env.port||7000;
const start = async() => {
    await connectDB(process.env.MONGO_URI)
    console.log("connected to db");
    app.listen(port,()=>{
        console.log("http://localhost:7000");
    })
}
start();
