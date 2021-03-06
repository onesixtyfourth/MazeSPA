import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MazeInputComponent } from './maze-input/maze-input.component';
import { MazeDisplayComponent } from './maze-display/maze-display.component';
import { MazeComponent } from './maze/maze.component'

@NgModule({
  declarations: [
    AppComponent,
    MazeInputComponent,
    MazeDisplayComponent,
    MazeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
