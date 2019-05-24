import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { MazeFactoryService, Maze } from '../services/maze-factory.service';

@Component({
  selector: 'maze-input',
  templateUrl: './maze-input.component.html',
  styleUrls: ['./maze-input.component.css']
})
export class MazeInputComponent implements OnInit {
  
  @Output() mazeEvent = new EventEmitter<Maze>()

  mazeForm = new FormGroup({
    width: new FormControl('5'),
    height: new FormControl('5')
  })

  constructor(private mazeFactory: MazeFactoryService) { }

  ngOnInit() {}

  onSubmit(){   
    this.mazeEvent.emit(this.mazeFactory.generateMaze(
      this.mazeForm.controls.width.value, 
      this.mazeForm.controls.height.value))
  }
}
