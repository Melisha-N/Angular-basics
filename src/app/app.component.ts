import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Myntra';
  //Numbersort using pipe
  public marks:number[]=[80,34,2,0,3,15,90,100,56];

  public names:string[]=["Mel","Shy","Nat","Ben"];

  //dispalying date using pipe
  public myDate:any= new Date();
}
