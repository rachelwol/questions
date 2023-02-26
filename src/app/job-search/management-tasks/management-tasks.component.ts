import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-management-tasks',
  templateUrl: './management-tasks.component.html',
  styleUrls: ['./management-tasks.component.css']
})
export class ManagementTasksComponent implements OnInit {

  constructor(private _formBuilder: UntypedFormBuilder) { }
  
  value:any;
  toppings = this._formBuilder.group({
    personal: false,
    angular2: false,
    cSharp: false,
    sql: false,
    nodejs: false,
  });

  ngOnInit(): void {
  }

}
