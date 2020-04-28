export const address : string = "Bengalore";

export class Employee {
	public name : string ;
	public age : number ;
	public salary : number ;
	public designation : string ;
	
	// class level variable
	static country : string = "India";
	
	static count:number = 0;
	
	constructor(n:string, a:number ,s:number ,d:string){
		this.name = n;
		this.age = a;
		this.salary = s;
		this.designation = d;
		
	}
	
	monthlySalary():number{
		let monthSalary:number = this.salary / 12;
		return monthSalary;
	}
	
	officeEntered():void{
		Employee.count++;
	}
	
	static officeExit(){
		console.log("It is static method");
	}
	
	
}

