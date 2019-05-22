import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MazeFactoryService {

  constructor() { }

  generateMaze(width: number, height: number){
    return new Maze (width, height)
  }
}

export class Maze{

  constructor(width: number, height: number){

  }
}