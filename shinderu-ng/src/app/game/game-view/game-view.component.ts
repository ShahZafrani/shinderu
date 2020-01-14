import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../service/games.service'
import { AuthService } from '../../service/auth.service';
import { Observable } from 'rxjs';
import { Game } from 'src/app/classes/game.model';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  public game: Observable<Game>;
  public gameId: string;

  constructor(private gamesService: GamesService,  private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.gameId = this.route.snapshot.paramMap.get('gameId'); 
    this.game = this.gamesService.getGame(this.gameId);
  }
  print(){
    console.log(this.game)
  }

  getCurrentUser() {
    return this.authService.getUserUid();
  }
  getPlayer(uid) {
    console.log(this.authService.getUserUid());
    if (this.authService.getUserUid() != null) {
      // if (this.game.g)
      return 'red';
    }
    return 'blue';
  }
}
