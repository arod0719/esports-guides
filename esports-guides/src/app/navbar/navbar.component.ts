import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Home',
        link: '',
        index: 0
      }, {
        label: 'Games',
        link: './game',
        index: 1
      }, {
        label: 'Players',
        link: './player',
        index: 2
      }, {
        label: 'Teams',
        link: './teams',
        index: 3
      },
      {
        label: 'Sensitivity Converter',
        link: './convert',
        index: 4
      },
      {
        label: 'Request Game',
        link: './request',
        index: 5
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
