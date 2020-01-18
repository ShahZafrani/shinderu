import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/classes/card.model';

@Component({
  selector: 'card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() title: String;
  @Input() card: Card;

  checkTileStyle(tile, row) {
    // console.log(tile, row)
    let color = "plain"
    Object.values(this.card.options).forEach(element => {
      console.log(element)
      if (tile == element.x && row == element.y) {
        color = "option";
      } else if (tile == "0" && row == "0") {
        color = "piece";
      }
    });
    return color;
  }

}
