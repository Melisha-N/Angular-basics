import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereferencevariabledemo',
  templateUrl: './templatereferencevariabledemo.component.html',
  styleUrls: ['./templatereferencevariabledemo.component.css']
})
export class TemplatereferencevariabledemoComponent implements OnInit {
  public fstname:string="";
  public uemail:string="";

  constructor() { }

  // bindData(uname:string){
  //   console.log(uname);
    
  // }
   
  bindData(uname:string, email:string){
    this.fstname = uname;
    this.uemail = email;
  }

  ngOnInit(): void {
  }

}
