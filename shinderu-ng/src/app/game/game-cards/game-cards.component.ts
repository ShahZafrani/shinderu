import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/classes/card.model';
import { Player } from 'src/app/classes/player.model';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent implements OnInit {

  selected = "";

  constructor() {
    this.cardSelected = new EventEmitter<any>();
   }

  ngOnInit() {
  }

  @Input() gameCards : Map<String, Card>;
  @Input() tableCard : String;
  @Input() players : Map<String, Player>;
  @Input() currentPlayer : String;

  @Output() cardSelected: EventEmitter<any>;

  selectCard(color, event) {
    console.log(color);
    if (this.players[color].uid === this.currentPlayer) {
      this.cardSelected.emit(event);
      this.selected = event;
    }
  }

}
