import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersort'
})
export class NumbersortPipe implements PipeTransform {

  transform(value: Array<Number>, ...args: unknown[]):  Array<Number> {
    console.log(value);
    
    return value.sort((a:number,b:number)=> a-b);
  }

}
