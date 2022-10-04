import { Directive, ElementRef, HostListener, OnInit, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'lightblue';
  // Inside HostBinding, it takes the property you want to bind. Here you pass the style.background property
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  
  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit(): void {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue' );
      this.backgroundColor = this.defaultColor;
  }
  
  // mouseenter is the event that triggers the method ( includes all the other events and custom events)
  @HostListener('mouseenter') mouseOver(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue' );
    this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent' );
    this.backgroundColor = this.defaultColor;
  }
}
