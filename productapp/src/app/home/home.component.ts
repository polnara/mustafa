import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries : Array<String> = ["India","USA","Australia"];

  employees : Array<any> = [
                            {"name":"Mahesh","age":30,"salary":400000},
                            {"name":"Ganesh","age":40,"salary":400000},
                            {"name":"Tiruapthi","age":20,"salary":700000}
                          ]
  
  matrix : Array<Array<number>> = [
                                    [10,20,30,40],
                                    [50,60,70,80],
                                    [10,20,30,40],
                                    [50,20,30,40]
                                  ]   
                                  
  num : number = 0;

  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.num++ ;
  }

}
