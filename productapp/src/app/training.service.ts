import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TrainingServie{
    constructor(private http:HttpClient){

    }
   /* execute(info){
        console.log("Execute method")
        if(info.type="Login"){
            this.http.get("http://localhost:3000/user/"+info.userName).subscribe((result)=>
            {
                console.log("Results ");
                console.log(result);
                if(result[0].password == info.password){
                    console.log("If condition executed")
                    return true;
                }else{
                    console.log("Else condition executed")
                    return false;
                }
            })
           
        }
        return false;
    }*/
    execute(info){
        console.log("Execute method")
        if(info.type="Login"){
            return this.http.get("http://localhost:3000/user/"+info.userName);
        }
    }

}