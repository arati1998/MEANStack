import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  public revStr:string="";
  transform(value: string, ...args: unknown[]): unknown {
    this.revStr =value.split('').reverse().join('');
    console.log(value);
    return this.revStr;
  }

}
