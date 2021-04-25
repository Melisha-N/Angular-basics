import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private emp:EmployeeService){}

  title = 'Myntra';
  //Numbersort using pipe
  public marks:number[]=[80,34,2,0,3,15,90,100,56];

  public names:string[]=["Mel","Shy","Nat","Ben"];

  //dispalying date using pipe
  public myDate:any= new Date();

//Usibg services
  public companyName:string='';
ngOnInit(){
    this.companyName=this.emp.getName();
}

public total:number;
public calculate(a:number,b:number){
  this.total = this.emp.priceCalculation(a,b);
}
}
