import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MazeInputComponent } from './maze-input/maze-input.component';
import { MazeDisplayComponent } from './maze-display/maze-display.component'

@NgModule({
  declarations: [
    AppComponent,
    MazeInputComponent,
    MazeDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
