import { Injectable } from '@angular/core';

@Injectable()
export class TrainingServie{
    
    execute(info){
        if(info.type="Login"){
            if(info.userName == "Harish" && info.password == "Harish") {
                return true;
            }
            return false;
        }
        return false;
    }

}