import { Directive ,ElementRef, Host, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {

  constructor(private obj: ElementRef) 
  { 

  }

  @HostListener('mouseenter') onmousenter()
  {
    this.obj.nativeElement.style.background = 'green';
  }
}
