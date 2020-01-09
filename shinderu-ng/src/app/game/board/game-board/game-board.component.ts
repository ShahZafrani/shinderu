import { Component, OnInit, Input } from '@angular/core';
import { Board } from 'src/app/classes/board.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  // TODO: refactor this addressing system here... and in cloud functions
  rowKeys = [
    ['a0','a1', 'a2', 'a3', 'a4'],
    ['b0','b1', 'b2', 'b3', 'b4'],
    ['c0','c1', 'c2', 'c3', 'c4'],
    ['d0','d1', 'd2', 'd3', 'd4'],
    ['e0','e1', 'e2', 'e3', 'e4'],
  ]

  constructor() { }

  ngOnInit() {
  }

  @Input() gameBoard : Board;

}
