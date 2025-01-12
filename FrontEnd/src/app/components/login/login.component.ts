import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, FloatLabelModule, InputTextModule, FormsModule, CardModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [FormGroup]
})
export class LoginComponent {
  loginForm: FormGroup | undefined;  // Define the form group
  submitted = false;     // Flag for form submission

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Initialize the form group
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { 
    return this.loginForm ? this.loginForm.controls : {}; 
  }

  // Submit method to handle login
  onSubmit() {
    this.submitted = true;

    // If the form is invalid, stop here
    if (!this.loginForm || this.loginForm.invalid) {
      return;
    }

    // Handle successful login here
    console.log('Form Submitted', this.loginForm.value);
  }
}
