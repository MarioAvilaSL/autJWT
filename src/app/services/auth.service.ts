import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>('http://localhost:3000/api/login', { username, password });
  }

  setToken(token: string) {
    this.tokenSubject.next(token);
    localStorage.setItem('token', token);
  }

  getToken() {
    return this.tokenSubject.value || localStorage.getItem('token');
  }

  logout() {
    this.tokenSubject.next(null);
    localStorage.removeItem('token');
  }
}
