import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { GameLobbyComponent } from './game/game-lobby/game-lobby.component'; 

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/firebase-config';
import { GameViewComponent } from './game/game-view/game-view.component';
import { GameBoardComponent } from './game/board/game-board/game-board.component';
import { GameMovesComponent } from './game/game-moves/game-moves.component';
import { GameCardsComponent } from './game/game-cards/game-cards.component';
import { GameStatusComponent } from './game/game-status/game-status.component';
import { GamesService } from './service/games.service';
import { RowComponent } from './game/board/row/row.component';
import { TileComponent } from './game/board/tile/tile.component';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LandingComponent,
    GameLobbyComponent,
    GameViewComponent,
    GameBoardComponent,
    GameMovesComponent,
    GameCardsComponent,
    GameStatusComponent,
    RowComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
  ],
  providers: [GamesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
