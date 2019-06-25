import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

   @HostListener('mouseleave')
   onMouseLeave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white')
  }

}
