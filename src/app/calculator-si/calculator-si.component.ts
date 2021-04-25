import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-calculator-si',
  templateUrl: './calculator-si.component.html',
  styleUrls: ['./calculator-si.component.css']
})
export class CalculatorSIComponent implements OnInit {
  public SI:any;
  public interest:number=0;
  public message:string;
  public msg: string = "Simple Interest: Rs.";
  constructor(private emp: EmployeeService) { }

  public calculationSI(principle:number,time:number,rate:number){
  
    this.SI = this.emp.calculateSI(principle,time,rate);
    if(this.SI >= 10000){
      
      this.interest = 1;
      this.message = " SI calculated is above Rs.10,000";
      
    }
    else{
      
      this.interest = -1;
      this.message = " SI is Good ";
    }
    
  }
  
  ngOnInit(): void {
  }

}
