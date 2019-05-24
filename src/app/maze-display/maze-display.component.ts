import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Maze } from '../services/maze-factory.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'maze-display',
  template: '<canvas #canvas><canvas>',
  styles: [`canvas{
      // border: 1px solid #000;
      width: 100%;
      height: 100%
    }`
  ]
})
export class MazeDisplayComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef
  private context: CanvasRenderingContext2D

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(){
    this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d')
  }

  drawMaze(maze: Maze){
    const canvasWidth = (this.canvas.nativeElement as HTMLCanvasElement).width
    const canvasHeight = (this.canvas.nativeElement as HTMLCanvasElement).height
    const cellWidth = this.calculateCellWidth(canvasWidth, canvasHeight, maze)
    const mazeWidth = cellWidth * maze.width
    const mazeHeight = cellWidth * maze.height
    const startX = (canvasWidth / 2) - (mazeWidth / 2)
    const startY = (canvasHeight / 2) - (mazeHeight / 2)

    this.context.clearRect(0, 0, canvasWidth, canvasHeight)
    
    //top border for maze
    for(let i = 0; i < maze.width; ++i){      
      this.context.beginPath()
      this.context.moveTo(startX + (cellWidth * i), startY)
      this.context.lineTo(startX + (cellWidth * i) + cellWidth, startY)
      this.context.stroke()
    }

    //Draw the rows
    for(let i = 0; i < maze.height; ++i){
      let rowY: number = startY + (cellWidth * i) + cellWidth

      let row = maze.grid.filter(function(item){
        return item.row === i
      })

      for(let j = 0; j < row.length; ++j){

        if(j === 0){
          this.context.beginPath()
          this.context.moveTo(startX, rowY - cellWidth)
          this.context.lineTo(startX, rowY )
          this.context.stroke()
        }

        if(row[j].connected.filter(function(item){
          return item.row > row[j].row
        }).length === 0){
          this.context.beginPath()
          this.context.moveTo(startX + (cellWidth * j), rowY)
          this.context.lineTo(startX + (cellWidth * j) + cellWidth, rowY)
          this.context.stroke()
        }
        
        if(row[j].connected.filter(function(item){
          return item.column > row[j].column
        }).length == 0){
          this.context.beginPath()
          this.context.moveTo(startX + (cellWidth * j) + cellWidth, rowY)
          this.context.lineTo(startX + (cellWidth * j) + cellWidth, rowY - cellWidth)
          this.context.stroke()
        }
      }
    }
  }

  private calculateCellWidth(width: number, height: number, maze: Maze) : number{
    let smallestCanvasDimension: number = Math.min(width, height)
    let smallestMazeDimension: number = Math.min(maze.width, maze.height)

    return smallestCanvasDimension / smallestMazeDimension
  }

}
