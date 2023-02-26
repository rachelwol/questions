import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private router: Router ) { }

  toDay: any;

  ngOnInit(): void {
    this.toDay = new Date();
  }

  openAlgorithms(){
    this.router.navigate(['/tasks/algorithm']);
  }

  openInterview(){
    let subjectsArr = ['personal','angular2', 'cSharp', 'nodeJs', 'sql']
    this.router.navigate(['/questions/'+subjectsArr[0]]);
  }

  openCV(){
    this.router.navigate(['/tasks/cv']);
  }

  openLearn(){
    this.router.navigate(['/tasks/learn']);
  }

  openCode(){
    this.router.navigate(['/tasks/code']);
  }

}
