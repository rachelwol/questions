import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any = {};
  loading: boolean = false;
  returnUrl: string = '';
  hide: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private userService : UserService,
    private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  register(user: any) {
    this.loading = true;
    this.userService.userRegister(user).subscribe((data:any) => {
      if(data){
        alert(data.message);
        this.router.navigate(['/login']);
      }
    }, err=>{
      alert(err.error);
    })
  }

}
