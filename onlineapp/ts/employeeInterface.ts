import {IAddress} from "./addressInterface"
export interface IEmployee {
	name:string;
	age:number;
	salary:number;
	designation:string;
	address:IAddress;
}