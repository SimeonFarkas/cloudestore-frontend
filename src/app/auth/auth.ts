import { Component, ChangeDetectorRef } from '@angular/core';
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

  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) {}

  register() {
    this.authService.register(this.registerName, this.registerEmail, this.registerPassword)
      .subscribe({
        next: () => { this.registerMessage = 'Registration successful!'; this.cdr.detectChanges(); },
        error: () => { this.registerMessage = 'Registration failed.'; this.cdr.detectChanges(); }
      });
  }

  login() {
    this.authService.login(this.loginUsernameOrEmail, this.loginPassword)
      .subscribe({
        next: () => { this.loginMessage = 'Login successful!'; this.cdr.detectChanges(); },
        error: () => { this.loginMessage = 'Login failed.'; this.cdr.detectChanges(); }
      });
  }
}