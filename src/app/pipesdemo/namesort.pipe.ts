import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namesort'
})
export class NamesortPipe implements PipeTransform {

  transform(value: Array<any>, ...args: any): Array<any> {
    // console.log(value);
    
    // return value.sort(a,b)=> a.name.localeCompare(b.name));

    return value.sort((a,b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if(nameA<nameB)
      {
        return -1;
      }
      else
      {
        return 1;
      }
    });
  }
  // items sort(function (a, b) {
  //   return a. localeCompare(b); //using String.prototype.localCompare()
  //   });
    

  
}
