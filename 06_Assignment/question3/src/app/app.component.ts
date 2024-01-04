import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<h1 [class]="\'h1_color\'">Marvellous Infosystems</h1><h3 [style.color]="\'blueviolet\'">Enter your name:</h3><input type="text">',
  styles: ['.h3_color{color:blueviolet;} .h1_color{color:chocolate}']
})
export class AppComponent {
  title = 'Question3';
}
