import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHigthligth]'
})
export class HigthligthDirective {
  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.color= 'red';
  }

@HostListener('mouseleave') onMouseLeave(){
  this.element.nativeElement.style.color= '';
}
  constructor(private element:ElementRef) {
  
  }

}
