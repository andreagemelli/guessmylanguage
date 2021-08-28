import { Component, OnInit } from '@angular/core';
import { TEAMS } from '../mock-teams';
import { Data } from '../data';
import { Team } from '../team';
import {ExamsApiService} from '../drawings/exams-api.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  teams = TEAMS;

  data: Data = {
    word: '',
    country: ''
  };

  guess: Data = {
    word: '',
    country: ''
  }

  round_number: number;
  round_phase: string;
  active_team: Team;

  constructor(private examsApi: ExamsApiService) { 
    this.round_number = 1;
    this.active_team = this.teams[0];
    this.round_phase = 'drawing';
  }

  ngOnInit(): void {
    
  }

  isDrawing(): boolean{
    if (this.round_phase == 'drawing'){
      return true;
    } else {
      return false;
    }
  }

  submit(): void {    
    this.round_phase = 'guessing';
    if (this.active_team.name == "Team Blue"){
      this.active_team = this.teams[1];
    } else {
      this.active_team = this.teams[0];
    }
    this.examsApi.addExam(this.data).subscribe()
  }

  close_round(): void {
    this.round_phase = 'drawing';
    this.round_number += 1;
    if(this.data.word == this.guess.word && this.data.country == this.guess.country){
      this.active_team.points += 1;
    }
  }

}
