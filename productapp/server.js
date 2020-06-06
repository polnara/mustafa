const express = require('express');
const http = require('http');
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"dist")));
// api to save user information
// Post :  /user
app.get("*",(req,res)=>{res.sendfile(path.join(__dirname,'dist/index.html'))})
//app.get("/user",(req,res)=>{return {"username":"harish","firstName":"Harish","LastName":"mahesh","password":"Pass123"}})


// get the user information
//  Get : /user
//  Get : /user/harish

// update user information
//  Update : /user

// delete user information
// Delete : /user


const port = process.env.port || '3000';
app.set('port',port);

const server = http.createServer(app);
server.listen(port,()=>console.log("Running application at port "+port))
