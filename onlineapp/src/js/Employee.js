class Employee{
	// Model classes
	constructor(n,a,s){
		this.name = n;
		this.age = a;
		this.salary = s;
	}
	monthlySalary(){
		var month =  this.salary/12;
		return month;
	}
}

var emp = new Employee("Mahesh",45,9000000);
console.log("employee "+ emp.name + " age is "+ emp.age + " salary is "+ emp.salary + " and Monthly salary is " + emp.monthlySalary());
