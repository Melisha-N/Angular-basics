import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agecalculate'
})
export class AgecalculatePipe implements PipeTransform {

  transform(value: any): any {
    let currentYear: any = new Date().getFullYear();
    let userDOB: any  = new Date(value).getFullYear();
    let age = currentYear - userDOB;
    return age;
    }

}
