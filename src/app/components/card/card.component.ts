import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // ? When to receive data from parent 
  @Input() public id?: number = undefined
  @Input() public text: string = ''
  @Input() public date?: Date = undefined

}
