import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserEmail(url: string, userId: number) {
    return new Promise(resolve => {
      this.http.get(url + '/' + userId).subscribe((res:any) => {
        resolve(res.email);
      });
    });
  }

}
