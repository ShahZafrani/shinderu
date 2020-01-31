import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Game } from '../classes/game.model'
import { Move } from '../classes/move.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private firestore: AngularFirestore) { }
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
}
