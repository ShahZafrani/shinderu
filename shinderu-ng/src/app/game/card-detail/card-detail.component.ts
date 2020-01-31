import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/classes/card.model';

@Component({
  selector: 'card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  constructor() {
    this.cardClick = new EventEmitter<string>();
   }

  ngOnInit() {
  }

  @Input() title: string;
  @Input() card: Card;

  checkTileStyle(tile, row) {
    // console.log(tile, row)
    let color = "plain"
    Object.values(this.card.options).forEach(element => {
      // console.log(element)
      if (tile == element.x && row == element.y) {
        color = "option";
      } else if (tile == "0" && row == "0") {
        color = "piece";
      }
    });
    return color;
  }

  @Output() cardClick: EventEmitter<string>;

  onCardSelect(event) {
    //todo: fix the card object type
    this.cardClick.emit(this.title);
  }

}
