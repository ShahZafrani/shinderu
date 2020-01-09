import { Board } from './board.model';
import { Ftimestamp } from './ftimestamp.model';
import { Card } from './card.model';
import { Player } from './player.model';

export class Game {
    board: Board;
    gameBegin: Ftimestamp;
    deck: Map<String, Card>;
    players: Map<String, Player>;
    gameStatus: String;
    tableCard: String;
    turnUid: String;
    victor: String;
}
