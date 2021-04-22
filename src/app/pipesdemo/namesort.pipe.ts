import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namesort'
})
export class NamesortPipe implements PipeTransform {

  transform(value: Array<String>, ...args: unknown[]): Array<String> {
    console.log(value);
    
    return value;
  }


  
}
