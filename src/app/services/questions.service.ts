import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getAngular2QuestionsJSON() {
    return this.http.get("assets/angular2QuestionsData.json");
  }

  getPersoalnIterviewQuestionsJSON() {
    // return this.http.get("/api/PersonalQuestoins");
    return this.http.get("assets/persoalInterviewQuestion.json");
  }

  getNodejsQuestionsJSON() {
    return this.http.get("assets/nodejsQuestions.json");
  }

  getSqlQuestionsJSON() {
    return this.http.get("assets/sqlQuestionsData.json");
  }

  getCSharpQuestionsJSON() {
    return this.http.get("assets/cSharpQuestionsData.json");
  }

}
