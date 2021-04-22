import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchdemo',
  templateUrl: './ngswitchdemo.component.html',
  styleUrls: ['./ngswitchdemo.component.css']
})
export class NgswitchdemoComponent implements OnInit {

  constructor() { }

  // public course: string='react';
  public course: string='';
  public selectCourse(event):void{
    console.log(event.target.value);
    this.course=event.target.value;
  }
  


  ngOnInit(): void {
  }

}
