import { Component, OnInit } from '@angular/core';
import { TweenMax, Power4 } from 'gsap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

 ngOnInit() {
  this.animateHero();

  }

  animateHero() {
    TweenMax.from('.slider-container__big-img', 2.5, {opacity: .5, x: -1200, ease: Power4.easeOut});
    TweenMax.from('.slider-container__small-img', 2, {opacity: .5, x: -1200, ease: Power4.easeOut}).delay(.5);
    TweenMax.from('.slider-container__slogan', 1, {opacity: 0, y: -100, ease: Power4.easeOut}).delay(1.5);
    TweenMax.from('.slider-container__percent', 1, {opacity: 0, y: -100, ease: Power4.easeOut}).delay(1.5);
  }

}
