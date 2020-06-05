export class Employee{

    firstName:string;
    lastName : string;
    password:string;
    confirmPassword:string;

    constructor(f,l,p,c){
        this.firstName = f;
        this.lastName = l;
        this.password = p;
        this.confirmPassword = c;
    }

    getEmployeeSalary(){
        return 20000;
    }
}