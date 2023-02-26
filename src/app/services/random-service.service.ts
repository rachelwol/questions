import { Injectable, OnInit, OnChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomServiceService implements OnInit, OnChanges {

  constructor() { }

  randomNum = Math.floor(Math.random() * 100);

  ngOnInit() {
    debugger;
    // this.randomNum = Math.floor(Math.random() * 100);
  }

  ngOnChanges(){
    debugger;
    // this.randomNum = Math.floor(Math.random() * 100);
  }

  getRandomNum(){
    // this.randomNum = Math.floor(Math.random() * 100);
    return this.randomNum;
  }
}
