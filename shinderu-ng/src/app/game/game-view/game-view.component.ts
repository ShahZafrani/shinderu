import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../service/games.service'
import { AuthService } from '../../service/auth.service';
import { Observable } from 'rxjs';
import { Game } from 'src/app/classes/game.model';
import { Move } from 'src/app/classes/move.model';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  public gameObs: Observable<Game>;
  public game : Game;
  public gameId: string;
  public selectedCard : string;
  public selectedPiece : string;
  public selectedFrom : string;
  public selectedDest : string;
  public selectedOption : string;

  constructor(private gamesService: GamesService,  private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.gameId = this.route.snapshot.paramMap.get('gameId'); 
    this.gameObs = this.gamesService.getGame(this.gameId);
    this.gameObs.subscribe(res => {
      this.game = res;
    });
    this.selectedCard = undefined;
    this.selectedPiece = undefined;
    this.selectedFrom = undefined;
    this.selectedDest = undefined;
  }
  print(){
    console.log(this.game)
  }

  getCurrentUser() {
    return this.authService.getUserUid();
  }
  getPlayer() {
    // todo: get the actual player
    // console.log(this.authService.getUserUid());
    if (this.game.players && this.authService.getUserUid() != null) {
      if (this.game.players["red"].uid ===  this.authService.getUserUid()) {
        return 'red';
      } else if (this.game.players["blue"].uid ===  this.authService.getUserUid()) {
        return 'blue';
      }
    }
    return "spectator"
  }
  updateSelectedCard(color, event){
    if (this.getPlayer() === color) {
      this.selectedCard = event;
    }
  }
  updateSelectedPiece(event) {
    this.selectedPiece = event;
  }
  updateSelectedFrom(event) {
    this.selectedFrom = event;
  }
  updateSelectedDest(event) {
    this.selectedDest = event;
  }
  updateSelectedOption(event) {
    this.selectedOption = event;
  }
  makeMove() {
    let move = new Move();
    move.cardChoice = this.selectedCard;
    move.cardOption = this.selectedOption;
    move.gamePiece = this.selectedPiece;
    move.uid = this.getCurrentUser();
    this.gamesService.updatePlayerMove(move, this.gameId);
  }
}
