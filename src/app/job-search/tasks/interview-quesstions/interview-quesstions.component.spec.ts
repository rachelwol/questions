import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewQuesstionsComponent } from './interview-quesstions.component';

describe('InterviewQuesstionsComponent', () => {
  let component: InterviewQuesstionsComponent;
  let fixture: ComponentFixture<InterviewQuesstionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewQuesstionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewQuesstionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
