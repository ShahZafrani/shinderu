import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Board } from 'src/app/classes/board.model';
import { Card } from 'src/app/classes/card.model';
import { stringify } from 'querystring';
import { Option } from 'src/app/classes/option.model';
import { element } from 'protractor';

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
  letters = ["a", "b", "c", "d", "e"];

  selectedPrimary: string;
  selectedSecondary: string;
  optionSquares: any;

  @Input() gameBoard : Board;
  @Input() cardChoice : string;
  @Input() gameCards : Map<string, Card>;
  @Input() player : string;

  @Output() selectPiece : EventEmitter<string>;
  @Output() selectFrom : EventEmitter<string>;
  @Output() selectDest : EventEmitter<string>;
  @Output() selectOption : EventEmitter<string>;


  constructor() {
    this.selectPiece = new EventEmitter<string>();
    this.selectFrom = new EventEmitter<string>();
    this.selectDest = new EventEmitter<string>();
    this.selectOption = new EventEmitter<string>();
    this.optionSquares = {};
   }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.cardChoice && this.gameCards) {
      let card = this.gameCards[changes.cardChoice.currentValue];
      if (this.selectedPrimary) {
        this.updateOptions(this.selectedPrimary, card.options);
      }
    }
    if(changes.gameBoard) {
      this.optionSquares = {};
      this.selectedPrimary = undefined;
      this.selectedSecondary = undefined;
    }
  }

  updateOptions(tileKey, options : Map<String, Option>){
    this.optionSquares = {}
    Object.keys(options).forEach(element => {
      // console.log(element)
      //ignore out of bounds
      let option = options[element]
      let x = this.speculativeX(tileKey[0], option.y);
      let y = this.speculativeY(tileKey[1], option.x);
      if (x !== "invalid" && y !== "invalid") {
        let key = x + y;
        // console.log(x + y)
        var landing = this.gameBoard[key]
        console.log(landing)
          console.log("landing, ", key);
          if (landing[0] !== this.player[0]) {
            this.optionSquares[key] = element;
            console.log(key);
          }
      }
    });
    console.log(this.optionSquares)
  }

  speculativeX(fromX, xDiff) {
    let xi = this.letters.indexOf(fromX);
    xDiff *= this.player === 'blue' ? -1 : 1;
    let newXi = xi + parseInt(xDiff);
    if (newXi < 0 || newXi > 4) {
      return "invalid";
    }
    return this.letters[newXi];
  }

  speculativeY(fromY, yDiff) {
    yDiff *= this.player === 'red' ? -1 : 1;
    let toY = parseInt(fromY) + parseInt(yDiff);
    if (toY < 0 || toY > 4) {
      return "invalid";
    }
    return toY;
  }
  
  updateSelected(tileKey) {
    if (this.validateSelection(tileKey)) {
      if (tileKey != this.selectedPrimary && !this.optionSquares[tileKey]) {
        if (this.cardChoice) {
          this.updateOptions(tileKey, this.gameCards[this.cardChoice].options);
        }
        this.selectedPrimary = tileKey;
        this.selectPiece.emit(this.gameBoard[tileKey]);
        this.selectFrom.emit(tileKey);
        this.selectedSecondary = "";
        this.selectDest.emit("");
      } else if (this.optionSquares[tileKey]) {
        this.selectedSecondary = tileKey;
        this.selectDest.emit(tileKey);
        this.selectOption.emit(this.optionSquares[tileKey]);
      } else {
        this.selectedPrimary = "";
        this.selectPiece.emit("");
        this.selectFrom.emit("");
        this.optionSquares = {}
        this.selectedSecondary = "";
        this.selectDest.emit("");
      }
    }
  }

  validateSelection(tileKey) {
    // logic here
    if(this.gameBoard[tileKey] != "" && this.gameBoard[tileKey][0] === this.player[0]) {
      return true;
    }
    if(this.optionSquares[tileKey]) {
      return true;
    }
    return false;
  }

  getTileClass(tileKey) {
    if (this.selectedPrimary === tileKey) {
      return 'tile-selected';
    }
    if (this.selectedSecondary === tileKey) {
      return 'tile-destination';
    }
    // if (this.cardChoice && this.selectedPrimary) {
      if (this.optionSquares[tileKey]) {
        return 'tile-option';
      }
    // }
    if (tileKey === 'a2') {
      return 'tile-red-throne'
    }
    if (tileKey === 'e2') {
      return 'tile-blue-throne'
    }
    return '';
  }

  getIconClass(tileKey) {
    if (this.gameBoard[tileKey]) {
      let css = "";
      if (this.gameBoard[tileKey][0] === 'r') {
        css += "red-";
      } else {
        css += "blue-";
      }
      if (this.gameBoard[tileKey][1] === '2') {
        css += "senpai";
      } else {
        css += "dot";
      }
      return css;
    }
    return '';
  }

}
