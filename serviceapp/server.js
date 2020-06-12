const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const db = require('./db');
const cors = require('cors');
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

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
app.use(cors());
/*app.use(function(request, response,next){
	res.header("Access-Control-Allow-Origin", "*");
 // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
*/
// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};
// get the user information
//  Get : /user
//  Get : /user/harish
app.get("/user",(req, res) => 
{ 

	let output ;
  //  return res.json(usersInfo)
  MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("trainingDB");
	dbo.collection("productapp").find({}).toArray((err, result) =>  {
		if (err) throw err;
		db.close();
		return res.json(result);
	});
  });
  
 // return res.json(response);
})
app.get("/user/:userName",(req,res)=>{ 
    console.log(req.param("userName"));
	
	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("trainingDB");
	dbo.collection("productapp").find({"userName": req.params.userName}).toArray((err, result) =>  {
		if (err) throw err;
		db.close();
		return res.json(result);
	});
  });
   /* for(var i = 0; i<usersInfo.length; i++){
       if(req.param("userName") == usersInfo[i].userName){
           console.log("It is Testing")
           return res.json(usersInfo[i]);
       }
    }
    return res.json({});
	*/
 })

app.post("/user",(req,res) => { 
    //usersInfo.push(req.body);
  MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("trainingDB");
	dbo.collection("productapp").insertOne(req.body, function(err, res) {
		if (err) throw err;
		console.log("1 document inserted");
		db.close();
		});
	});
return res.json( 
	req.body
);
// usersInfo.push(req) 
})

// update user information
//  Update : /user
app.put("/user",(req,res)=>{
    for(var i = 0; i<usersInfo.length; i++){
        if(req.body.userName === usersInfo[i].userName){
            console.log("matched")
            usersInfo.splice(i,1)
            break;
        }
    }
    usersInfo.push(req.body);
    return res.json(req.body);
})

// delete user information
// Delete : /user
app.delete("/user/:userName",(req,res)=>{
    for(var i = 0; i<usersInfo.length; i++){
        if(req.params.userName === usersInfo[i].userName){
            console.log("Matched")
            usersInfo.splice(i,1);
            break;
        }
     }
     return res.json({"message":"record deleted sucessfully"});

});
// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));