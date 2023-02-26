import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTasksComponent } from './management-tasks.component';

describe('ManagementTasksComponent', () => {
  let component: ManagementTasksComponent;
  let fixture: ComponentFixture<ManagementTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
