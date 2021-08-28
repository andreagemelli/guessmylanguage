
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExamsApiService } from './drawings/exams-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhiteboardPageComponent } from './whiteboard-page/whiteboard-page.component';
import { ShapeService } from './shape.service';
import { TextNodeService } from './text-node.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { TeamComponent } from './team/team.component';
import { MatInputModule } from '@angular/material/input';
import { GameboardComponent } from './gameboard/gameboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WhiteboardPageComponent,
    TeamComponent,
    GameboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [
    ShapeService,
    TextNodeService,
    ExamsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }