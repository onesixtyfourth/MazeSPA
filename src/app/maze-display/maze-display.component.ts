import { Component, OnInit } from '@angular/core';
import { Maze } from '../services/maze-factory.service';

@Component({
  selector: 'maze-display',
  template: '<canvas #canvas><canvas>',
  // styles: [`canvas{
  //     border: 1px solid #000;
  //     width: 100%;
  //     height: 100%
  //   }`
  // ]
})
export class MazeDisplayComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  drawMaze(maze: Maze){
    console.log(`Width: ${maze.width}, Height: ${maze.height}, Size: ${maze.grid.length}`)
  }

}
