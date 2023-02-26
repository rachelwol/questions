import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  register(user: any) {
    this.loading = true;
    // this.http.post('http://localhost:3000/api/userLogin/login')
  }

}
