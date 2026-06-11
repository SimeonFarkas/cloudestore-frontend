import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class AuthComponent {
  registerName = '';
  registerEmail = '';
  registerPassword = '';
  registerMessage = '';

  loginUsernameOrEmail = '';
  loginPassword = '';
  loginMessage = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.registerName, this.registerEmail, this.registerPassword)
      .subscribe({
        next: () => this.registerMessage = 'Registration successful!',
        error: () => this.registerMessage = 'Registration failed.'
      });
  }

login() {
  this.authService.login(this.loginUsernameOrEmail, this.loginPassword)
    .subscribe({
      next: () => this.loginMessage = 'Login successful!',
      error: () => this.loginMessage = 'Login failed.'
    });
}
}