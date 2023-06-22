import { Component, OnInit } from '@angular/core';
import {
  imageBlur,
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
    imageBlur,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  animationDelayTitle: number = 1500;
  animationDelayButton: number = 3000;
  animationDelayBlur: number = 4500;
  animationState = 'hidden';
  animationStateButton = 'hidden';
  animationStateImg = 'notBlured';

  //Nouvelle facon donnée par codium
  ngOnInit(): void {
    this.startAnimation('title', this.animationDelayTitle);
    this.startAnimation('button', this.animationDelayButton);
    // this.bluredImage(this.animationDelayBlur);
    this.startAnimation('imgBlur', this.animationDelayBlur);
  }
  /**
   *
   * @param target name of animation title or button
   * @param delay delay for launching animations
   */

  startAnimation(target: string, delay: number) {
    setTimeout(() => {
      switch (target) {
        case 'title':
          this.animationState = 'visible';
          break;
        case 'button':
          this.animationStateButton = 'visible';
          break;
        case 'imgBlur':
          this.animationStateImg = 'blured';
          break;
      }
    }, delay);
  }
}
