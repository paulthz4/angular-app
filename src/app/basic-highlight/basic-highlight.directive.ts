import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
// the [] are not part of the name, it just tells angular that it selects it as an attribute
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
  
  constructor(private elementRef: ElementRef){
    
  }
  
  // this is not the best way to change/retrieve your elements
  ngOnInit(): void {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}