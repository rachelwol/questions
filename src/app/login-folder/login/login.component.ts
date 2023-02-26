import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {

  }

  login(user: any) {
    this.http.post('http://localhost:3000/api/userLogin/login',{username: user.username, password: user.password}).subscribe((data:any) => {
      if(data.token){
        this.authService.saveToken(data.token);
        this.authService.saveRole(data.role);
        this.router.navigate(['/home']);
      }
    }, err=>{
      alert(err.error);
    })
  }

}
