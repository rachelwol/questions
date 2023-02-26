import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { TodosService } from '../todos.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private usersService: UsersService, private todosService: TodosService, private postsService:PostsService) { }


  ngOnInit(): void {
  }

  async getUserDetails(userId:number){
    let userEmail = await this.usersService.getUserEmail('https://jsonplaceholder.typicode.com/users',userId);
    console.table(userEmail);
    let todos = await this.todosService.getUserTodos('https://jsonplaceholder.typicode.com/users',userId);
    console.table(todos);
    let posts = await this.postsService.getUserPosts('https://jsonplaceholder.typicode.com/users',userId);
    console.table(posts);
  }

}
