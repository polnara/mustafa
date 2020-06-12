import { Component } from '@angular/core';
import { Routes,Router } from '@angular/router';
import { TrainingServie } from '../training.service';
import { Observable } from 'rxjs';
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
        let result:Observable<any> = this.service.execute(this.loginInfo);
        result.subscribe((output)=>{
            console.log("Results ");
            console.log(output);
            if(output[0].password == this.loginInfo.password){
                console.log("If condition executed")
                this.rout.navigate(["home"]);
            }
        })
        /*console.log("Status :: "+status);
        if(status){    
            this.rout.navigate(["home"]);
        }
        */
        
    }
}