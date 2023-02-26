import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-personal-interview',
  templateUrl: './personal-interview.component.html',
  styleUrls: ['./personal-interview.component.css']
})

export class PersonalInterviewComponent implements OnInit {

  questionsObj: any;
  questionIndex: number = 0;
  answerButton: string = 'תשובה';

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(){
    this.questionsService.getPersoalnIterviewQuestionsJSON().subscribe(res => {
      this.questionsObj = res;
      this.questionsObj.questions.sort(() => Math.random() - 0.5);
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
