import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../mustMatchValidator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup;
    
  submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group(
            {
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                password: ['', [Validators.required, Validators.minLength(6)]],
                confirmPassword: ['', Validators.required]
            }, 
            {
                validator: MustMatch('password', 'confirmPassword')
            }
        );
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
}
