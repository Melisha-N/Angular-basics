import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  //  Event Binding
  public myname: string = "Melisha";

  public updateName(){
    this.myname="Nathasha";
  }

  public nm: String ="Mel";
  public updateMyName(value){
    this.nm=value;
  }

  public productName: string='Mouse';
  public addToCart(item){
    this.productName = item;
  }



  ngOnInit(): void {
  }

}
