import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCVComponent } from './send-cv.component';

describe('SendCVComponent', () => {
  let component: SendCVComponent;
  let fixture: ComponentFixture<SendCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendCVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
