import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

register(username: string, email: string, password: string) {
  return this.http.post<{ token: string }>(`${this.apiUrl}/register`, { username, email, password })
    .pipe(tap(res => localStorage.setItem('cloudstore_token', res.token)));
}

login(usernameOrEmail: string, password: string) {
  return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { usernameOrEmail, password })
    .pipe(tap(res => localStorage.setItem('cloudstore_token', res.token)));
}

  getToken(): string | null {
    return localStorage.getItem('cloudstore_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}