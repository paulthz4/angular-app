import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective{
  // the 'set' keyword sets the method which is also a property
  @Input() set Unless(condition: boolean){
    if( !condition){
      this.vcRef.createEmbeddedView(this.templetRef);
    }
    else{
      this.vcRef.clear();
    }
  }
  
  constructor(private templetRef: TemplateRef<any>, private vcRef: ViewContainerRef){
  
  }
}