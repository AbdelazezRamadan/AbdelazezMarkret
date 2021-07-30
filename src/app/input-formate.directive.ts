import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[InputFormate]'
})
export class InputFormateDirective {

  constructor(private ref : ElementRef) { }
  @HostListener('focus') onFocus(){
    console.log('Focus');
  }
  @HostListener('blur') onBlur(){
    let getValue : string= this.ref.nativeElement.value;
    this.ref.nativeElement.value=getValue.toUpperCase();

  }
}
