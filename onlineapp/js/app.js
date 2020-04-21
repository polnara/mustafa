// ECMASCRIPT
// variable

function handleLogin(){
	var userName = document.getElementById("uname").value;
	var pwd = document.getElementById("pwd").value;
	console.log(userName);
	console.log(pwd);
	if(userName == undefined  || userName == ""){
		document.getElementById("errMsg").innerHTML = "Please enter user name";
		return;
	}else
	if(pwd == undefined || pwd == "" ){
		document.getElementById("errMsg").innerHTML = "Please enter Password";
		return ;
	}else
	window.location = "http://www.google.com";
	
}
var d;

var a = 10;
var b = "hello";
var c = true;

// hoisting
d = "world";

let e = 100;

d = e;

console.log("D value :: "+d);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// function call
var addResult = add(20.3,40.5);
console.log("Addition Result :: "+addResult);

// NaN = not a number

// function declaration
// Named functions
function add(a,b){
	/*console.log("========typeof NaN=========");
	console.log(typeof Number(b));
	console.log("========");
	return a + Number(b);
	*/
	return String(a) + b;
}

// annonymous function assing to variable
var multiply = function(a,b){
	return a * b;
}

/*
class contain properties and methods
function Employee(n,a,s){
	this.name = n;
	this.age = a;
	this.salary = s;
	
	this.monthlySalary = function(){
		
	}
}
*/

console.log(multiply(20,30));
console.log(typeof multiply);

// Java script object notation
var emp = {};
console.log(typeof emp);

var dept ;
console.log(dept);
console.log(typeof dept);

// any real value is true
var x = "";
console.log(Boolean(x));

// control statements
for(var i = 1; i<10; i++){
	if(i%2 ==0) {
		for (var j = 1 ; j<10; j++){
		console.log(i + " * " + j + " = "+ (i * j));
		}
	}else{
		console.log("odd Number not print");
	}
	console.log("");
}

//arrow functions. Event programming
// parameters => expression
var div = (a,b) => {
	
	if(b!=0){
		return a / b
	}
	return 0;
};
console.log("Division Result :: "+ div(10,0));

function Employee(n,a,s){
	this.name = n;
	this.age = a;
	this.salary = s;
	
	this.monthlySalary = function(){
		return this.salary / 12;
	}
}

var emp = new Employee("Harish",30,500000);
console.log(typeof emp);
console.log(emp);
console.log("employee "+ emp.name + " age is "+ emp.age + " salary is "+ emp.salary + " and Monthly salary is " + emp.monthlySalary());

var emp2 = new Object();
emp2.name = "Mahesh";
emp2.age = 40;
emp2.salary = 600000;
emp2.monthlySalary = function(){
	return this.salary/12;
}
console.log(emp2);
console.log("employee "+ emp2.name + " age is "+ emp2.age + " salary is "+ emp2.salary + " and Monthly salary is " + emp2.monthlySalary());

var emp3 = {"name":"Ganesh","age":20,"salary":800000};
