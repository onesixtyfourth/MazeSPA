import { Component, OnInit, ViewChild } from '@angular/core';
import { Maze } from '../services/maze-factory.service';
import { MazeDisplayComponent } from '../maze-display/maze-display.component';

@Component({
  selector: 'app-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.css']
})
export class MazeComponent implements OnInit {
  @ViewChild(MazeDisplayComponent) display: MazeDisplayComponent

  constructor() { }

  ngOnInit() {
  }

  newMazeEvent(maze: Maze){
    console.log("Got the Maze")
    this.display.drawMaze(maze)
  }

}
