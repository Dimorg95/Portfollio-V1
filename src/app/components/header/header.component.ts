import { Component, OnInit } from '@angular/core';
import {
  moveToBottom,
  moveToLeft,
  moveToRight,
  moveToTop,
} from 'src/app/animations/headerAnimation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    //Import des animations de animationsHEADER
    moveToLeft,
    moveToRight,
    moveToBottom,
    moveToTop,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  animationDelayTitle: number = 1500;
  animationDelayButton: number = 3000;
  animationState = 'hidden';
  animationStateButton = 'hidden';

  //Nouvelle facon donnée par codium
  ngOnInit(): void {
    this.startAnimation('title', this.animationDelayTitle);
    this.startAnimation('button', this.animationDelayButton);
  }
  /**
   *
   * @param target name of animation title or button
   * @param delay delay for launching animations
   */
  startAnimation(target: string, delay: number) {
    setTimeout(() => {
      if (target === 'title') {
        this.animationState = 'visible';
      } else if (target === 'button') {
        this.animationStateButton = 'visible';
      }
    }, delay);
  }
}
