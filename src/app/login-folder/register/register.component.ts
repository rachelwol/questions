import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

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

  constructor(private authenticationService: AuthenticationService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.loading = true;
    this.authenticationService.login(this.user.username, this.user.password).subscribe(data => {
      this.router.navigate([this.returnUrl]);
    }, err => {
      alert(err.message);
      this.loading = false;
    });
  }

}
