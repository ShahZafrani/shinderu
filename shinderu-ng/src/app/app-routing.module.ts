import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component'
import { GameLobbyComponent } from './game/game-lobby/game-lobby.component';
import { GameViewComponent } from './game/game-view/game-view.component';

//This is my case 
const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'lobby',
        component: GameLobbyComponent
    },
    {
        path: 'game/:gameId',
        component: GameViewComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }