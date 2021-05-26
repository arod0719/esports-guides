import { Component, OnInit } from '@angular/core';
import { Player, Game, Team } from './card.model';

  export interface PlayerData {
    mouse: string;
    keyboard: string;
    headset: string;
    monitor: string;
    sensitivity: string;
  }

  export class PlayerComponent implements OnInit {
    dataColumns: string[] = ['mouse', 'keyboard', 'headset', 'monitor', 'sensitivity'];
    dataSource = PLAYER_DATA;

    constructor() { }

    ngOnInit(): void {
    }

  }


  const PLAYER_DATA: PlayerData[] = [
    {mouse: "Razer DeathAdder", keyboard: "Corsair K95", headset: "Logitech G95", monitor: "Dell AW5125", sensitivity: "1000, 4, 25"}
    ];

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
