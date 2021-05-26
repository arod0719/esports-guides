import { Input, Component, OnInit } from '@angular/core';
import { Player, Game, Team } from './player.model';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
  export class PlayerComponent implements OnInit {
    @Input() player: Player;
    dataColumns: string[] = ['mouse', 'keyboard', 'headset', 'monitor', 'sensitivity'];
    dataSource = PLAYER_DATA;

    name: string;
    game: Game;
    team: Team;
    mouse: string;
    keyboard: string;
    headset: string;
    monitor: string;
    sensitivity: string;

    constructor() { }

    names: string[] = ['Perkz', 'Zven'];
    games: string[] = ['League of Legends', 'Rocket League'];
    teams: string[] = ['Cloud9', 'TSM'];
    mice: string[] = ['Razer DeathAdder'];
    keyboards: string[] = ['Corsair K95'];
    headsets: string[] = ['Logitech G95'];
    monitors: string[] = ['Dell AW5125'];
    sensitivities: string[] = ['1000, 4, 25'];

    ngOnInit(): void {
    }

  }


  const PLAYER_DATA: Player[] = [
    {mouse: "Razer DeathAdder", keyboard: "Corsair K95", headset: "Logitech G95", monitor: "Dell AW5125", sensitivity: "1000, 4, 25", name: "Alex", team: Team.Cloud9, game: Game.RocketLeague}
    ];
