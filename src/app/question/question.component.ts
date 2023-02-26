import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionsService } from '../services/questions.service';
import { ActivatedRoute } from '@angular/router';
import { RandomServiceService } from '../services/random-service.service';
import axios from 'axios';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [RandomServiceService]
})
export class QuestionComponent implements OnInit {

  constructor(private questionsService: QuestionsService, private route: ActivatedRoute,
    private randomService: RandomServiceService, private http: HttpClient) { }

  questionIndex: number = 0;
  questionsObj: any;
  answerButton: string = 'תשובה';

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      switch (param['type']) {
        case 'personal': {
          this.questionsService.getPersoalnIterviewQuestionsJSON().subscribe(res => {
            this.questionsObj = res;
            this.questionsObj.questions.sort(() => Math.random() - 0.5);
          });
          break;
        }
        case 'angular2': {
          this.questionsService.getAngular2QuestionsJSON().subscribe(res => {
            this.questionsObj = res;
            this.questionsObj.questions.sort(() => Math.random() - 0.5);
          });
          break;
        }
        case 'c#': {
          this.questionsService.getCSharpQuestionsJSON().subscribe(res => {
            this.questionsObj = res;
            this.questionsObj.questions.sort(() => Math.random() - 0.5);
          });
          break;
        }
        case 'nodeJs': {
          this.questionsService.getNodejsQuestionsJSON().subscribe(res => {
            this.questionsObj = res;
            this.questionsObj.questions.sort(() => Math.random() - 0.5);
          });
          break;
        }
        case 'sql': {
          this.questionsService.getSqlQuestionsJSON().subscribe(res => {
            this.questionsObj = res;
            this.questionsObj.questions.sort(() => Math.random() - 0.5);
          });
          break;
        }
      }
    });
  }

  showAnswer() {
    if (this.questionsObj.questions[this.questionIndex].showAnswer == true) {
      this.answerButton = 'תשובה';
    } else {
      this.answerButton = 'חזור לשאלה';
    }
    this.questionsObj.questions[this.questionIndex] = {
      question: this.questionsObj.questions[this.questionIndex].question,
      answer: this.questionsObj.questions[this.questionIndex].answer,
      showAnswer: !this.questionsObj.questions[this.questionIndex].showAnswer
    }
    // !this.questionsObj.questions[this.questionIndex].showAnswer;

  }

  nextQuestion() {
    this.questionsObj.questions[this.questionIndex].showAnswer = false;
    this.questionIndex++;
    this.answerButton = 'תשובה';
  }

  previewQuestion() {
    this.questionsObj.questions[this.questionIndex].showAnswer = false;
    this.questionIndex > 0 ? this.questionIndex-- : this.questionIndex;
    this.answerButton = 'תשובה';
  }

}
