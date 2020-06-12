import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  @Input()
  currentAmount:number = 0;

  @Input()
  withdrawAmount:number = 0;

  @Output()
  withdrawEvent:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleWithdraw(){
    console.log(this.currentAmount+ " "+this.withdrawAmount);
    if(this.withdrawAmount < this.currentAmount){
      this.currentAmount = this.currentAmount - this.withdrawAmount;
      this.withdrawEvent.emit(this.currentAmount);
    }else{
      alert("You have insufficient funds")
    }
  }
}
