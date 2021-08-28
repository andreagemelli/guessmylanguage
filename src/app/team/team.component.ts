import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Team } from '../team';
import { TEAMS } from '../mock-teams';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements AfterContentInit {

  teams = TEAMS;

  constructor() { }

  ngAfterContentInit(): void {
    const blueCard = document.getElementById("blue");
    if (blueCard) blueCard.style.backgroundColor = "lightblue";
  }

}
