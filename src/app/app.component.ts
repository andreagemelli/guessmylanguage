import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExamsApiService } from './drawings/exams-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  examsListSubs!: Subscription;

  constructor (private examsApi: ExamsApiService) {}

  ngOnInit(): void {
  }
  
  title = 'Guess My Language';

  ngOnDestroy(): void {
    this.examsListSubs.unsubscribe();
  }

  getDrawings(): void{
    this.examsListSubs = this.examsApi
      .getExams()
      .subscribe(res => {
          console.log('Word: ',res[res.length-1]['word'], '- Language:', res[res.length-1]['country']);
        },
        console.error
      );
  }
}
