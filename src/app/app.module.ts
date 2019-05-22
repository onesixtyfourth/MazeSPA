import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MazeDrawComponent} from './mazes/mazeDraw.component'

@NgModule({
  declarations: [
    AppComponent,
    MazeDrawComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
