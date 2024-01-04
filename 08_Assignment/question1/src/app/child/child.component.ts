import { Component, EventEmitter , Output} from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {


  @Output() public laserData = new EventEmitter();
  public sendData(data: any)
  { 
    this.laserData.emit("Hello Parent..."+data);
    console.log(data);
  }

}
