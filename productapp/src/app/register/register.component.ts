import { Component, OnInit } from '@angular/core';
import { TrainingServie } from '../training.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any = {};

  constructor(private serve:TrainingServie) { }

  ngOnInit() {
  }

  submitRegister(){
    console.log(this.user);
    console.log("Register button clicked")
  }
}
