import { Component } from '@angular/core';
import { Routes,Router } from '@angular/router';
/*
property binding -> []
event binding -> ()
two way data binding -> [()] -> we should use for input tags
{{}} -> Interpolation -> used to display data
*/
@Component({
    selector:"login-cmp",
    templateUrl:"./login.component.html",
    styleUrls:["./login.component.css"]
})
export class LoginComponent {

    canDisable:boolean=false;
    userName:string;
    password:string;

    constructor(private rout:Router){
        console.log("It is constructor of LoginComponent");
    }

    handleLogin(){
        if(this.userName == "Harish" && this.password == "Harish") {
            this.rout.navigate(["home"]);
        }
    }
}