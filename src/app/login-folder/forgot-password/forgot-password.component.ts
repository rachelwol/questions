import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

    user: any = {};
    loading:boolean = false;

  ngOnInit() {

  }

  resetPassword(){

  }

}
