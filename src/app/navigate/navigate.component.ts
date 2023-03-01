import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  isUser: boolean = false;
  username: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.isUser.subscribe(isUser => {
      this.isUser = isUser;
      if (this.isUser)
      this.username = this.userService.getUserDetails().username;
    })
  }

  logout() {
    this.userService.userLogout();
  }

}
