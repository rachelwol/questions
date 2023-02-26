import { Component, OnInit } from '@angular/core';
import { RandomServiceService } from '../services/random-service.service';

@Component({
  selector: 'app-main-navigate',
  templateUrl: './main-navigate.component.html',
  styleUrls: ['./main-navigate.component.css'],
  providers: [RandomServiceService]
})
export class MainNavigateComponent implements OnInit {

  constructor(private randomService: RandomServiceService) { }

  ngOnInit(): void {
    console.log('MainNavigateComponent: ' + this.randomService.randomNum);
  }

}
