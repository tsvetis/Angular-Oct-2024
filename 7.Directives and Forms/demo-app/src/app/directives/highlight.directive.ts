import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

type MyVoid = () => void;

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit, OnDestroy {
  // @HostListener('mousedown', ['$event']) mouseDownHandler(e: MouseEvent) {
  //   console.log('MouseDown Activated', e);
  // }

  unsubEventArray: MyVoid[] = [];

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Captures element
    // console.log(this.elRef.nativeElement);

    // !Important: Bad Practice
    // this.elRef.nativeElement.style.background = 'orange';

    // Good Practice
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink');

    const mouseEnterEvent = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseEnterHandler.bind(this)
    );

    const mouseLeaveEvent = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler.bind(this)
    );

    this.unsubEventArray.push(mouseEnterEvent);
    this.unsubEventArray.push(mouseLeaveEvent);
  }

  mouseEnterHandler(e: MouseEvent) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'orange');
    this.renderer.addClass(this.elRef.nativeElement, 'highlight');
  }

  mouseLeaveHandler(e: MouseEvent) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'initial');
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
  }

  ngOnDestroy(): void {
    console.log('On Destroy Invoked!', this.unsubEventArray);
    this.unsubEventArray.forEach((eventFn) => eventFn());
  }
}
