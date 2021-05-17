import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'game', component: GameComponent}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule],
    exports: [RouterModule]
})

export class AppRoutingModule{}