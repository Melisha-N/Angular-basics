import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {

  //  let elemnt =  el.nativeElement.style;
  //  elemnt.backgroundColor = 'lavender';
  //  elemnt.color = 'violet';

   }


   @HostListener('mouseenter') onMouseEnter(){
     this.highlightColor('Lavender');
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.highlightColor(null);
  }

   private highlightColor(color:string):void{
     this.el.nativeElement.style.backgroundColor = color;

   }


}
