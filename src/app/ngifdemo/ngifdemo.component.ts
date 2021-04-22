import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifdemo',
  templateUrl: './ngifdemo.component.html',
  styleUrls: ['./ngifdemo.component.css']
})
export class NgifdemoComponent implements OnInit {

  constructor() { }

  public isValid: boolean = true;
  public isEmployee: boolean = false;
  public changeEmployee(val:boolean){
    this.isEmployee=val;
  }

  public employees=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": "New York"
        
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": "Seattle"
        
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": "Maldives"
    }
  ]
 

  ngOnInit(): void {
  }

}
