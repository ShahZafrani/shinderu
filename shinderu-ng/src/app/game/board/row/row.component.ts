import { Component, OnInit, Input } from '@angular/core';
import { Board } from 'src/app/classes/board.model';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() rowKeys : String[];
  @Input() gameBoard : Board;


}
