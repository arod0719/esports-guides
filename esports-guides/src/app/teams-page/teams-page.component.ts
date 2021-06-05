import { Component, OnInit } from '@angular/core';
import { Team, teamList } from '../teams/team.model'

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.css']
})
export class TeamsPageComponent implements OnInit {
  teams: Team[];
  constructor() {
    this.teams = teamList;
  }

  ngOnInit(): void {
  }

}
