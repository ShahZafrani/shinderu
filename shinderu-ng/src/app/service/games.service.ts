import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Game } from '../classes/game.model'
import { Move } from '../classes/move.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  createUrl : string;

  constructor(private http: HttpClient, private firestore: AngularFirestore, private authService: AuthService,) {
    this.createUrl = "https://us-central1-shinderu-707e1.cloudfunctions.net/createNewGame";
   }
  getGames() {
    return this.firestore.collection('games').snapshotChanges();
  }

  getGame(gameId: string) {
    let ref = this.firestore.doc<Game>('games/'+gameId);
    // console.log(ref);
    return ref.valueChanges();
  }

  updatePlayerMove(move: Move, gameId: String) {
    this.firestore.doc('games/' + gameId + '/player_moves/' + move.uid).update(Object.assign({}, move));
  }

  createGame() {
    console.log(this.authService.getUserUid());
    return this.http.post<any>(this.createUrl, {"id": this.authService.getUserUid()});
  }

}
