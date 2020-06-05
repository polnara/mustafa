import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-outsourcing',
  templateUrl: './outsourcing.component.html',
  styleUrls: ['./outsourcing.component.css']
})
export class OutsourcingComponent implements OnInit {

  userName : string = "Harish";

  firstName:string = "VIJAY";

  price : number =  1200;

  currentDate : Date = new Date("10/10/2010");

  emp:Employee = new Employee("Suresh","Mahesh","Abc123","Abc123");

  searchString:string = "";
/*  empList:Employee[] = [
                          new Employee("Suresh","Mahesh","Abc123","Abc123"),
                          new Employee("Vijay","Mahesh","Abc123","Abc123"),
                          new Employee("Pradeep","Mahesh","Abc123","Abc123"),
                          new Employee("Surya","Mahesh","Abc123","Abc123"),
                          new Employee("Pawan","Mahesh","Abc123","Abc123"),
                          new Employee("Ganesh","Mahesh","Abc123","Abc123")
                        ]*/

  empList:string[] = ["harish","Vijay","Mahesh","Suresh","Surme"]
  constructor() { }

  ngOnInit() {
  }

}
