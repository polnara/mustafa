import { Component } from '@angular/core';

@Component({
    selector:"login-cmp",
    templateUrl:"./login.component.html",
    styleUrls:["./login.component.css"]
})
export class LoginComponent {
    constructor(){
        console.log("It is constructor of LoginComponent");
    }
}