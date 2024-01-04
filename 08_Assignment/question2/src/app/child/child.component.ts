import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() public pData:any="";

  @Output() public cData:any = new EventEmitter();
  public sendToParent()
  {
      this.cData.emit('Hello Parent, from child');
  }
}
