import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { MazeFactoryService } from '../services/maze-factory.service';

@Component({
  selector: 'maze-input',
  templateUrl: './maze-input.component.html',
  styleUrls: ['./maze-input.component.css']
})
export class MazeInputComponent implements OnInit {

  mazeForm = new FormGroup({
    width: new FormControl('5'),
    height: new FormControl('5')
  })

  constructor(private mazeFactory: MazeFactoryService) { }

  ngOnInit() {}

  onSubmit(){
    this.mazeFactory.generateMaze(
      this.mazeForm.controls.width.value, 
      this.mazeForm.controls.height.value)

      //pass to display component draw method
      
  }

}
