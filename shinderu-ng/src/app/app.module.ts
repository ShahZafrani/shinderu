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
import { GameBoardComponent } from './game/game-board/game-board.component';
import { GameMovesComponent } from './game/game-moves/game-moves.component';
import { GameCardsComponent } from './game/game-cards/game-cards.component';
import { GameStatusComponent } from './game/game-status/game-status.component';
import { GamesService } from './service/games.service';
import { AuthService } from './service/auth.service';
import { CardDetailComponent } from './game/card-detail/card-detail.component';
import { HttpClientModule } from '@angular/common/http';

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
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
  ],
  providers: [GamesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
