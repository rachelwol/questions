import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDetails } from '../models/userDetails.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDetails: any = undefined;
  isUser = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUserDetails() {
    if (this.userDetails != undefined)
      return this.userDetails;
    else {
      this.http.get('http://localhost:3000/api/userDetails').subscribe((data: any) => {
        this.userDetails = data;
        this.isUser.next(true);
        return this.userDetails;
      }, err => {
        alert(err.error);
      });
    }
  }

  setUserDetails(user: any) {
    this.userDetails = user;
    if (this.userDetails == undefined)
      this.isUser.next(false);
    else
      this.isUser.next(true);
  }

  userLogin(user: any) {
    return this.http.post('http://localhost:3000/api/userLogin/login', { username: user.username, password: user.password });
  }

  userLogout() {
    this.authService.saveToken('');
    this.authService.saveRole('');
    this.setUserDetails(undefined);
    this.isUser.next(false);
  }

  userRegister(user: UserDetails) {
    return this.http.post('http://localhost:3000/api/userLogin/register', user);
  }

}
