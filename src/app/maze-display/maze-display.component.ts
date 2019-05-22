import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'maze-display',
  template: '<canvas #canvas><canvas>',
  styles: [`canvas{
      border: 1px solid #000;
      width: 100%;
      height: 100%
    }`
  ]
})
export class MazeDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
