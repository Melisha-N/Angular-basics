import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  // parent to child --> @Input()
  @Input() studentName: string[];
  @Input('companyName') nameOfCompany:string;

  // child to parent --> @Output()
  @Output() sendMessage = new EventEmitter<string>();
  sendData(val){
    this.sendMessage.emit(val);
  }

  ngOnInit(): void {
  }
}
