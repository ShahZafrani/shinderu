import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/classes/card.model';
import { Player } from 'src/app/classes/player.model';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() gameCards : Map<String, Card>;
  @Input() tableCard : String;
  @Input() players : Map<String, Player>;
  @Input() currentPlayer : String;

}
