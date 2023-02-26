import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveRole(role: string) {
    sessionStorage['role'] = role;
  }

  getRole(): string {
    return sessionStorage['role'];
  }

  saveToken(token: string) {
    sessionStorage['token'] = token;
  }

  getToken(): string {
    return sessionStorage['token'];
  }

}
