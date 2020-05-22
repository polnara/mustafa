import { Directive, Input } from '@angular/core';
import { Validator, FormGroup, ValidationErrors } from '@angular/forms';

@Directive({
    selector:'[mustMatch]'
})
export class MustMatchDirective implements Validator{

    @Input("mustMatch")
    mustMatch: string[] = []

    validate(formGroup:FormGroup) : ValidationErrors{
        return this.MustMatch(this.mustMatch[0],this.mustMatch[1]);
    }

    MustMatch(password:string, matchingPassword:string):ValidationErrors{
       return (formGroup:FormGroup)=>{
            const pwd = formGroup.controls[password];
            const confirmPwd = formGroup.controls[matchingPassword];

            // return null if controls haven't initilized it
            if(!pwd && !confirmPwd){
                return null
            }

            // return null if 
            if(confirmPwd.errors && !confirmPwd.errors.mustMach){
                return null;
            }

            if(pwd.value != confirmPwd.value){
                confirmPwd.setErrors({MustMatch:true})
            }else{
                confirmPwd.setErrors(null)
            }
        }
    }
}