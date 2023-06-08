import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    //Titre
    trigger('moveToLeft', [
      state('start', style({ transform: 'translateX(4rem)', opacity: 0 })),
      state('end', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('start => end', animate('2s')),
    ]),
    //Sous-titre
    trigger('moveToRight', [
      state('start', style({ transform: 'translateX(-4rem)', opacity: 0 })),
      state('end', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('start => end', animate('2s')),
    ]),
    //Bouton gauche et droite
    trigger('moveToBottom', [
      state('start', style({ transform: 'translateY(4rem)', opacity: 0 })),
      state('end', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('start => end', animate('2s ease-in-out')),
    ]),
    //Bouton du milieu
    trigger('moveToTop', [
      state('start', style({ transform: 'translateY(-4rem)', opacity: 0 })),
      state('end', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('start => end', animate('1s ease-in-out')),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  animationDelayTitle = 1500;
  animationDelayButton = 3000;
  animationState = 'start';
  animationStateButton = 'start';

  ngOnInit(): void {
    this.timeOutTitle();
    this.timeOutBouton();
  }

  /**
   * Animation delay des titres a l'ouverture de la page
   */
  timeOutTitle() {
    setTimeout(() => {
      // Add delay before triggering the animation
      this.startAnimationTitle();
    }, this.animationDelayTitle);
  }
  /**
   * Animation delay des boutons de la NAV
   */
  timeOutBouton() {
    setTimeout(() => {
      this.startAnimationButton();
    }, this.animationDelayButton);
  }

  //State des animations
  startAnimationTitle() {
    this.animationState = 'end';
  }
  startAnimationButton() {
    this.animationStateButton = 'end';
  }
}
