import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithms-puzzles',
  templateUrl: './algorithms-puzzles.component.html',
  styleUrls: ['./algorithms-puzzles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlgorithmsPuzzlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
