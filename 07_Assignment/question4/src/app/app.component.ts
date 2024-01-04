import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  public Name : string ="Marvellous Infosystem";

  
  public upperCase()
  {
    this.Name=this.Name.toUpperCase();
    return this.Name;
  }

  public lowerCase()
  {
    this.Name= this.Name.toLowerCase();
    return  this.Name;
  }

  public changeCase(value:string)
  {
    if(value=='upper')
    {
      this.Name=this.Name.toUpperCase();
      return this.Name;
    }
    else if(value=='lower')
    {
      this.Name= this.Name.toLowerCase();
      return  this.Name;
    }
    return this.Name;
  }
}

