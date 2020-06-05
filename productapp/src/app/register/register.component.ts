import { Component, OnInit } from '@angular/core';
import { TrainingServie } from '../training.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
