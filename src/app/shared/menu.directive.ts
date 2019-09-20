import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenu]'
})
export class MenuDirective {

  constructor(private elRef: ElementRef) {}

  @HostListener('click') toggleMenu() {
    document.querySelector('.navbar-list').classList.toggle('open');
  }

}
