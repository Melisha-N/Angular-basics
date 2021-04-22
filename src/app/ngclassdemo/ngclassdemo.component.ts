import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclassdemo',
  templateUrl: './ngclassdemo.component.html',
  styleUrls: ['./ngclassdemo.component.css']
})
export class NgclassdemoComponent implements OnInit {

  constructor() { }

  public myClass="second";
  public myclass=['first'];
  public isValid: boolean = true;

  ngOnInit(): void {
  }

}
