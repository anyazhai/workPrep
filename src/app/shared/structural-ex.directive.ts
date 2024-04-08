import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralEx]'
})
export class StructuralExDirective {
  //can be used as <div *appStructuralEx [ifcond] = "conditionthingy">
  @Input() set ifcond(condition: boolean){
    if (condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
