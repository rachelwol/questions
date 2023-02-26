import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MockInterviewService } from 'src/app/services/mock-interview.service';

@Component({
  selector: 'app-subjects-form',
  templateUrl: './subjects-form.component.html',
  styleUrls: ['./subjects-form.component.css']
})
export class SubjectsFormComponent {

  constructor(private mockInterviewService: MockInterviewService, private router: Router) { }

  subjectsSelected = [''];

  save() {
    this.subjectsSelected = this.subjectsSelected.filter((str) => str !== '');
    this.mockInterviewService.setSubject(this.subjectsSelected);
    this.router.navigate(['personal-interview']);
  }

  add() {
    this.subjectsSelected.push('');
  }

  changeValue(event: any, position: number) {
    debugger;
    if (!this.subjectsSelected.includes(event))
      this.subjectsSelected[position] = event;
  }
}
