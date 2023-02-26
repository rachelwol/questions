import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>('/api/authenticate', { username: username, password: password }).pipe(map((user: any)=>{
      if(user && user.token){
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    }));
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

  register(username: string, firstName: string, lastName: string, email: string, userPhone: string, password: string){
    
  }
}
