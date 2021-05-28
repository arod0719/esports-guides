import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { playerList } from '../player/player.model';
import { Player } from './player.model';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: Player | undefined;

  constructor(
    private route: ActivatedRoute,
  ) { }
  /*
    names: string[] = ['Perkz', 'Zven'];
    games: string[] = ['League of Legends', 'Rocket League'];
    teams: string[] = ['Cloud9', 'TSM'];
    mice: string[] = ['Razer DeathAdder'];
    keyboards: string[] = ['Corsair K95'];
    headsets: string[] = ['Logitech G95'];
    monitors: string[] = ['Dell AW5125'];
    sensitivities: string[] = ['1000, 4, 25'];
    */

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const playerIdFromRoute = routeParams.get('playerId');

    this.player = playerList.find(player => player.name === playerIdFromRoute);
    }

  }
