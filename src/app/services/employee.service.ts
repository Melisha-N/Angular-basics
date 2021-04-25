import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public getName():string{
    return "wolken.in";
  }

  public priceCalculation(a:number,b:number){
    return a+b;
  }

  public SI:number;
  public calculateSI(principle:number,time:number,rate:number):number{
    this.SI = (principle*time*rate)/100;
    return this.SI;
  }
}
