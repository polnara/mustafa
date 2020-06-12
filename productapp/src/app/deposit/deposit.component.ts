import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  @Input()
  currentAmount:number = 0;

  @Input()
  depositAmount:number = 0;

  @Output()
  depositEvent:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleDeposit(){
    console.log(this.currentAmount+ " "+this.depositAmount);

    this.currentAmount = Number(this.currentAmount) + Number(this.depositAmount);
    this.depositEvent.emit(this.currentAmount);
  }
}
