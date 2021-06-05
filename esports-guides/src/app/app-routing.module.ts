import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamsPageComponent } from './teams-page/teams-page.component';
import { SenseConverterComponent } from './sense-converter/sense-converter.component';
import { AddGameComponent } from './add-game/add-game.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'game/:gameId', component: GameComponent},
    {path: 'player/:playerId', component: PlayerComponent},
    {path: 'team/:teamId', component: TeamsComponent},
    {path: 'convert', component: SenseConverterComponent},
    {path: 'request', component: AddGameComponent},
    {path: 'teams-page', component: TeamsPageComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule],
    exports: [RouterModule]
})

export class AppRoutingModule{}
