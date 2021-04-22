import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-togglebutton',
  templateUrl: './togglebutton.component.html',
  styleUrls: ['./togglebutton.component.css']
})
export class TogglebuttonComponent implements OnInit {

  constructor() { }
  public textShow: boolean= true;
  public buttonName: string ="Show";
  showText(){
    this.textShow = !this.textShow;
    if(this.textShow){
      this.buttonName = "Show";
    }
    else{
      this.buttonName = "Hide";
    }
  }

  ngOnInit(): void {
  }

}
