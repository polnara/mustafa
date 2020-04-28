// class will be inside the curly braces
import {Employee} from "./Employee";

export class EmployeeValidator{

	validateEmployee(employee:Employee){
		if(employee.age<25 || employee.age > 60 ){
			return false;
		}
		return true;
	}

}
