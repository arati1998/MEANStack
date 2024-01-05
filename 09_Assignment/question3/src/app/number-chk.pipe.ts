import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberChk',
  standalone: true
})
export class NumberChkPipe implements PipeTransform {

  transform(value: number, ...args: string[]): any {

    if(args[0]=="Even")
    {
        if(value % 2 ==0)
        {
          return "This is even number";
        }else
        {
          return "This is not even number";
        }
    }
    if(args[0]=="Odd")
    {
      if(value % 2 ==0)
      {
        return "This is not a odd number";
      }else
      {
        return "This is odd number";
      }
    }

    if(args[0]=="Prime")
    {
      let i=1;
      let Flag =0;
       for(i=2; i< value/2 ;i++)
       {
          if(value% i  ==0)
          {
            Flag=1;
          }
       }

       if(Flag==0)
       {
          return "This is prime number";
       }
       else
       {
          return "This is not a prime number";
       }
    }

    if(args[0]=="Perfect")
    {
      let i=1;
      let sum=0;
      for(i=1;i<=value;i++)
      {
        if(value % i ==0)
        {
          sum+=value;
        }
      }

      if(sum==value)
      {
        return "This is perfect number";
      }
      else
      {
        return "This is not a perfect number";
      }
    }

    return null;
  }

}
