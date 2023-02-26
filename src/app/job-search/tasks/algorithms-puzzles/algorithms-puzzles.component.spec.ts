import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmsPuzzlesComponent } from './algorithms-puzzles.component';

describe('AlgorithmsPuzzlesComponent', () => {
  let component: AlgorithmsPuzzlesComponent;
  let fixture: ComponentFixture<AlgorithmsPuzzlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorithmsPuzzlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmsPuzzlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
