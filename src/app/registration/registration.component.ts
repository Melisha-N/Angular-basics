import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public Register={
    fname:'',
    emailid:'',
    dob:'',
    contact:'',
    gender:'',
    password:'',
    cnfpassword:''
  }
  registration(val){
    console.log(val);
    
  }
}
