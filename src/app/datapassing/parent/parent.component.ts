import { ApplicationRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  // parent to child --> @Input()
  public studentName=['Benison','Glen','Michelle','Elvira','Prathista'];
  public companyName:string = "Apple.com";

  // child to parent --> @Output()
  public productName:string;
  recieveMsg(val){
    this.productName=val;
    console.log(this.productName);
    
  }
  ngOnInit(): void {
  }

}
