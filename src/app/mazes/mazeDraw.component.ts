import { Component} from '@angular/core'

@Component({
    selector: 'draw-maze',
    template: `<canvas id="stage" [style.width.%]=50 [style.height.%]=50></canvas>`
})

export class MazeDrawComponent{

}