import { Component } from '@angular/core';
import { MazeFactoryService } from './services/maze-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maze Generation';

  constructor(private mazeFactory: MazeFactoryService){
    console.log(mazeFactory.generateMaze(10, 10))
  }
}
