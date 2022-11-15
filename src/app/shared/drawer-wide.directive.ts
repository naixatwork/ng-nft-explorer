import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appDrawerWide]'
})
export class DrawerWideDirective {

  @Input()
  public isWide: boolean = false;

  constructor(private readonly elementRef: ElementRef) {
  }

}
