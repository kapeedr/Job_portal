const express = require("express");
let cors = require('cors');
const app = express();
const db = require("./db");
let bodyParser = require('body-parser');
app.use(express.urlencoded({extended:false}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next();
  });

const jobsRoute = require('./routes/jobsRoute');
app.use('/api/jobs/' , jobsRoute)


const port =  4000;

app.listen(port, () => console.log("node mone server started"));