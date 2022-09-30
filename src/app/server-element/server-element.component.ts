import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // the @Input() decorator allows its parent component to access its child properties.
  // (the app-component can access element when its has <server-element>)
  @Input('srvElement') element: {type: string, name: string, content: string };
   
  constructor() {
    console.log('constructor called!');
  }

  // it's good practice to also implement the hooks(interfaces) as well as importing them
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!')
    console.log(changes);
  }

  ngOnInit() : void{
    console.log('ngOnInit called!');
  }
  
  // gets called on every change detection run
  ngDoCheck(): void {
      console.log('ngDoCheck called')
  }
  
  ngAfterContentInit(){
    console.log('ngAfterContentInit called')
  }
  
  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked called')
  }
  
  // the views get called after the content has been checked
  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
  }
  
  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked called')
  }
  
  // add a <button> element in the app component to see the change/hook being called
  // when the button is clicked, it calls this method, the first element was removed from the array
   // therefor *ngFor re-ran and didn't render the first element bc it was removed, so it was removed from the DOM so this hook was called
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
