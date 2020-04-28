//OOPS : abstraction, encapsulation, inheritence, polimorphism
// abstraction : hide the internal implementation and expose the interface to access the object
// encapsulation : hold the data from unotherized access
// Inheritence : aquire base class properties and methods into derived class
// polimorphism : same behaviour with multiple ways.

class BaseCalculator {
	
	constructor(){
		this.a = 100;
	}
	division(a,b){
		console.log("Super class division");
		return a / b;
	}
}

class Calculator extends BaseCalculator{
	// Business classes
	
	constructor(){
		super();
		this.a = 200;
	}
	add(a,b){
		console.log("add with 2 params");
		return a + b
	}
	
	add(a,b,c){
		console.log("add with 3 params");
		return a + b + c;
	}
	multiply(a,b){
		var res = a * b;
		return res;
	}
	division(a,b){
		console.log("Sub class division");
		return a/b;
	}
}

var cal = new Calculator();
console.log("Addition Result :: "+cal.add(10,40,40));
console.log("Multiply Result :: "+cal.multiply(10,40));
console.log("Division Result :: "+cal.division(4000,40));
console.log("X value :: "+cal.a);