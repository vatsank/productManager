import { Directive, Renderer, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInsert]'
})
export class InsertDirective {

  constructor(private renderer: Renderer, private elementRef: ElementRef) { }

 @Input() set addText(message){

  console.log('Element With Directive'+ this.elementRef.nativeElement)
      this.elementRef.nativeElement.innerHTML = message;
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'color', 'red');

 }
}
