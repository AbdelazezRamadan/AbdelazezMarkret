import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string , limitCount? : number): any  {
    if(!value)  return null;
    else{
      let ActulaLimit = (limitCount) ?  limitCount : 20;
      return value.substring(0 , limitCount ) + "....";
    }
  }

}
