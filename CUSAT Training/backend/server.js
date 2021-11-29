const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/cities');

const app = express();

app.use(bodyParser.json());
app.use((req,res,next)=>{
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type,Accept,Authorization'
);
res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE');
next();
});
app.use(routes);

app.listen(5000,()=>{
    console.log("Backend Server is running in port 5000");
});