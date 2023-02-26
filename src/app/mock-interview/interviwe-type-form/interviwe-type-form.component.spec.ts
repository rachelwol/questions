import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviweTypeFormComponent } from './interviwe-type-form.component';

describe('InterviweTypeFormComponent', () => {
  let component: InterviweTypeFormComponent;
  let fixture: ComponentFixture<InterviweTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviweTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviweTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
