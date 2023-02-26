import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockInterviewService {

  private subjects: string[] = [];

  constructor() { }

  getSubjects() {
    return this.subjects;
  }

  setSubject(subject: string[]) {
    this.subjects = subject;
  }

}
