import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit {
  // the @Input() decorator allows its parent component to access its child properties.
  // (the app-component can access element when its has <server-element>)
  @Input('srvElement') element: {type: string, name: string, content: string };
   
  constructor() { }

  ngOnInit(): void {
  }

}
