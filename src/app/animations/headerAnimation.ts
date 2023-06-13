import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

/**
 * Animation for the header
 */
//Titre
export const moveToLeft = trigger('moveToLeft', [
  state('hidden', style({ transform: 'translateX(4rem)', opacity: 0 })),
  state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
  transition('hidden => visible', animate('2s')),
]);
//SOus-titre
export const moveToRight = trigger('moveToRight', [
  state('hidden', style({ transform: 'translateX(-4rem)', opacity: 0 })),
  state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
  transition('hidden => visible', animate('2s')),
]);
//Bouton gauche et droite
export const moveToBottom = trigger('moveToBottom', [
  state('hidden', style({ transform: 'translateY(4rem)', opacity: 0 })),
  state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
  transition('hidden => visible', animate('2s ease-in-out')),
]);
//Bouton du milieu
export const moveToTop = trigger('moveToTop', [
  state('hidden', style({ transform: 'translateY(-4rem)', opacity: 0 })),
  state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
  transition('hidden => visible', animate('1s ease-in-out')),
]);
