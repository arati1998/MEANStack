import { Directive , ElementRef, Host, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {

  constructor(private obj: ElementRef) 
  { 

  }

  @HostListener('mouseenter') onmousenter()
  {
    this.obj.nativeElement.style.background = 'red';
  }

}
