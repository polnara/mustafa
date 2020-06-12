import { Component, OnInit } from '@angular/core';
import { TrainingServie } from '../training.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
//CORS => Cross origin resource sharing
  model: any = {};

  constructor(private http:HttpClient){

  }
  onSubmit() {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post("http://localhost:3000/user",this.model,{ headers: header }).subscribe((response) => {
      console.log(response);
    });
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
