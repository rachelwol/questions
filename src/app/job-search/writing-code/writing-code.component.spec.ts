import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingCodeComponent } from './writing-code.component';

describe('WritingCodeComponent', () => {
  let component: WritingCodeComponent;
  let fixture: ComponentFixture<WritingCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
