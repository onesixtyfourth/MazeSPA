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
  width: number;
  height: number;

  grid: Array<Cell>

  constructor(width: number, height: number){
    this.width = width
    this.height = height

    this.grid = new Array()

    for(let i = 0; i < this.height; ++i){
      for(let j = 0; j < this.width; ++j){
        this.grid.push(new Cell(i, j))
      }
    }

    this.grid.forEach((item) => {
      let neighbours = this.getNeighbours(item).filter(function(cell){
        return cell.column === item.column + 1 || cell.row === item.row -1
      }.bind(this))

      if(neighbours.length > 0){
        let next = neighbours[Math.floor(Math.random() * neighbours.length)]
        item.connectCell(next)
        next.connectCell(item)
      }
    })
  }

  getNeighbours(cell: Cell){
    return this.grid.filter(function(item){
      let result: boolean = false
      let dx = cell.column - item.column
      let dy = cell.row - item.row
      let distance = Math.sqrt(dx * dx + dy * dy)

      if(distance === 1 && (item.row === cell.row || item.column === cell.column)){
        result = true
      }
      return result
    })
  }
}

export class Cell{
  row: number
  column: number

  connected: Array<Cell>

  constructor(row: number, column: number){
      this.row = row
      this.column = column
      this.connected = new Array()
  }

  connectCell(cell: Cell){
    this.connected.push(cell)
  }
}