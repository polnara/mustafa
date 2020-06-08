const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
//const api = require('./server/routes/api');
const usersInfo = [
    {"firstName":"Harish","lastName":"Mahesh","userName":"Harish","password":"Pass123","confirmpassword":"Pass123"}
];
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


// get the user information
//  Get : /user
//  Get : /user/harish
app.get("/user",(req, res) => { return res.json(usersInfo)})
app.get("/user/:userName",(req,res)=>{ 
    console.log(req.param("userName"));
    for(var i = 0; i<usersInfo.length; i++){
       if(req.param("userName") == usersInfo[i].userName){
           console.log("It is Testing")
           return res.json(usersInfo[i]);
       }
    }
    return res.json({});
 })

app.post("/user",(req,res) => { 
    usersInfo.push(req.body);
    return res.json( 
        req.body
    );
    // usersInfo.push(req) 
})

// update user information
//  Update : /user
app.put("/user",(req,res)=>{
    for(var i = 0; i<usersInfo.length; i++){
        if(req.body.userName == usersInfo[i].userName){
            usersInfo.pop(usersInfo[i]);
            break;
        }
    }
    usersInfo.push(req.body);
    return res.json(req.body);
})

// delete user information
// Delete : /user
//app.delete();
// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));