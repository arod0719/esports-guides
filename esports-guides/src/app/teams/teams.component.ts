import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team, teamList } from '../teams/team.model';
import { Player} from '../player/player.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  team: Team | undefined;
  players: Player[];


  constructor(
    private route: ActivatedRoute,
  ) {
    this.players = [new Player('Perkz', "LoL", "Cloud9", 'Razer DeathAdder', 'Corsair K95', 'Logitech G95',
                                'Dell AW5125', '1000, 4, 25')];
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const teamIdFromRoute = routeParams.get('teamId');

    this.team = teamList.find(player => player.name === teamIdFromRoute);
  }

}
