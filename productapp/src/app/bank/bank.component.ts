import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  currentAmount:number = 10000;

  amount : number = 0;

  constructor() { }

  ngOnInit() {
  }

  handleResponse(result){
    console.log(result)
    this.currentAmount = result
  }

 
}
