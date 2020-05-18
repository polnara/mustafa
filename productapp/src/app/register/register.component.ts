import { Component, OnInit } from '@angular/core';
import { TrainingServie } from '../training.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private serve:TrainingServie) { }

  ngOnInit() {
  }

}
