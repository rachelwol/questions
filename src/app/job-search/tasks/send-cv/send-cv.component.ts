import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-cv',
  templateUrl: './send-cv.component.html',
  styleUrls: ['./send-cv.component.css']
})
export class SendCVComponent implements OnInit {

  cvSends: any = [];

  cvDetails = {
    company: '',
    job: '',
    details: '',
    contact: ''
  };
  sumCV: any;
  btnText = 'הבא';
  disableBtn: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

  addCompanySendCV() {
    this.cvSends.push(this.cvDetails);
    console.log('נוסף בהצלחה');
    this.cvDetails = {
      company: '',
      job: '',
      details: '',
      contact: ''
    }
  }

  saveDetails() {
    console.log('הנתונים נשמרו בהצלחה');
  }

}
