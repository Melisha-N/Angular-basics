import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  // Interpolation Binding

  public headerName: String = "Myntra!!";

  public productList: String[] = ["jeans", "jewelery", "tops" , "tunics", "kurthas"];

  public displayName(){
    this.headerName = "Myntra-App!";
  }

  // Property Binding
  public checkboxId: string ="chkbx1"
  public checkbxId: string[] =["ck1","ck2","ck3"] ;

  public isAccepted: boolean = true;

  //Two Way Binding
  public userName: String = "Melu";

  ngOnInit(): void {
  }

}
