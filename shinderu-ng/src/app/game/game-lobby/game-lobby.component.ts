import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { GamesService } from '../../service/games.service'
import { Observable } from 'rxjs';
import { Game } from 'src/app/classes/game.model';

@Component({
  selector: 'game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.css']
})
export class GameLobbyComponent {

  public games: any[];
  constructor(private gamesService: GamesService, ) {
    // this.games = db.collection('games').snapshotChanges();
    this.gamesService.getGames().subscribe(data => {
      this.games = data.map(e => {
        // console.log(e.payload.doc.id)
        return {
          id: e.payload.doc.id,
          game: e.payload.doc.data() as Game
        }
      })
    });
  }
}
