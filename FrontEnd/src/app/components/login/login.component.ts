import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FluidModule } from 'primeng/fluid';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CheckboxModule, CommonModule, ButtonModule, CardModule, InputTextModule, PasswordModule, FormsModule, ReactiveFormsModule, FluidModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Getter for form controls
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Navigate to the dashboard upon successful login
      this.router.navigate(['/dashboard']);
    }
  }
}
