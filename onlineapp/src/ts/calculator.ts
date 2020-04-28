import {ICalculator} from "./calculatorInterface";
// For abstract class, we cannot create Object
// if we don't want to implement all the methods from interface into my implementation class, we shoud specity that implementation class as abstract
export class Calculator implements ICalculator{
	add(a:number,b:number):number{
		return a + b;
	}
	
	multiply(a:number,b:number):number{
		return a * b;
	}

	
}