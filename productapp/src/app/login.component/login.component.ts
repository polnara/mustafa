import { Component } from '@angular/core';
import { Routes,Router } from '@angular/router';
import { TrainingServie } from '../training.service';
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
    /*userName:string;
    password:string;
*/
    loginInfo:any ={};
    
    constructor(private rout:Router, private service:TrainingServie){
        console.log("It is constructor of LoginComponent");
    }

    handleLogin(){
       /* // service object creating
        let service = new TrainingServie();

        // convert json
        let loginInfo = new Object();
        loginInfo["type"] = "Login";
        loginInfo["userName"] = this.userName;
        loginInfo["password"] = this.password;
        */
        // call method
        console.log(this.loginInfo);
        let status = this.service.execute(this.loginInfo)
        if(status){    
            this.rout.navigate(["home"]);
        }
        
    }
}