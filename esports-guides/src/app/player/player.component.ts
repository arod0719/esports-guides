import { Component, OnInit } from '@angular/core';

  export interface PlayerData {
    mouse: string;
    keyboard: string;
    headset: string;
    monitor: string;
  }

  const PLAYER_DATA: PlayerData[] = [
    {mouse: "Razer DeathAdder", keyboard: "Corsair K95", headset: "Logitech G95", monitor: "Dell AW5125"}
    ];

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  dataColumns: string[] = ['mouse', 'keyboard', 'headset', 'monitor'];
  dataSource = PLAYER_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
