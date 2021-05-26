import { Component, OnInit } from '@angular/core';

import { Player, Team, Game } from '../player/player.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  players: Player[];

  constructor() {
    this.players = [new Player('Perkz', Game.LeagueOfLegends, Team.Cloud9, 'Razer DeathAdder', 'Corsair K95', 'Logitech G95',
                                'Dell AW5125', '1000, 4, 25')];
  }

  ngOnInit(): void {
  }

}
