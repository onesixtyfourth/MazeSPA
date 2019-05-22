import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'maze-input',
  templateUrl: './maze-input.component.html',
  styleUrls: ['./maze-input.component.css']
})
export class MazeInputComponent implements OnInit {

  mazeForm = new FormGroup({
    width: new FormControl('5', Validators.required),
    height: new FormControl('5', Validators.required)
  })

  constructor() { }

  ngOnInit() {}

  onSubmit(){
    console.log("Submitted")
  }

}
