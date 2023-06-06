import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChanbg]'
})
export class ChanbgDirective {
  private dragging = false;
  private initialX!: number;
  private initialY!: number;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    this.dragging = true;
    this.initialX = event.clientX;
    this.initialY = event.clientY;
    this.renderer.addClass(this.el.nativeElement, 'dragging');
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (this.dragging) {
      const deltaX = event.clientX - this.initialX;
      const deltaY = event.clientY - this.initialY;
      this.renderer.setStyle(this.el.nativeElement, 'transform', `translate(${deltaX}px, ${deltaY}px)`);
    }
  }
  @HostListener('document:mouseup') onMouseUp() {
    if (this.dragging) {
      this.dragging = false;
      this.renderer.removeClass(this.el.nativeElement, 'dragging');
      this.renderer.removeStyle(this.el.nativeElement, 'transform');
    }
  }

}
