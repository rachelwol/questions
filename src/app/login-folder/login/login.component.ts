import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  loading: boolean = false;
  returnUrl: string = '';
  hide: boolean = true;
  username = '';
  password = '';

  constructor(private authenticationService: AuthenticationService, private activatedRoute: ActivatedRoute,
    private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.authenticationService.logout();
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    debugger;
    let token = localStorage.getItem('info');
    this.http.post('http://localhost:3200/verify', { token: token }).subscribe((data: any) => {
      if (data["verified"] == 1) {
        this.router.navigateByUrl("home")
      }
    })
  }

  login() {
    debugger;
    this.http.post('http://localhost:3000/api/userLogin/login',{userId: '123'}).subscribe(data => {
      console.log(data);
    })
  }

}
