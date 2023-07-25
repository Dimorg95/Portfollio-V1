import { Injectable } from '@angular/core';
import { ImgArray } from '../models/img-array.model';

@Injectable({
  providedIn: 'root',
})
export class TechnoServiceService {
  imgArray: ImgArray[] = [
    {
      imgName:
        '../../assets/images/techLogo/angular-typescript-label-text-symbol-logo-transparent-png-331059.png',
      imgAlt: 'Angular TypeScript logo',
    },
    {
      imgName:
        '../../assets/images/techLogo/kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a2a1f9.2428698915320700656662.png',
      imgAlt: 'JavaScript logo',
    },
    {
      imgName: '../../assets/images/techLogo/html-5.png',
      imgAlt: 'HTML logo',
    },
    {
      imgName: '../../assets/images/techLogo/css-3.png',
      imgAlt: 'CSS logo',
    },
    {
      imgName:
        '../../assets/images/techLogo/kisspng-sass-logo-cascading-style-sheets-scalable-vector-g-codzero-cms-blog-tool-publishing-platform-5b74aaa12bfc04.1827984715343725131802.png',
      imgAlt: 'SASS/SCSS logo',
    },
    {
      imgName:
        '../../assets/images/techLogo/kisspng-node-js-javascript-front-and-back-ends-computer-so-5afa00da479a63.7008339115263336582933.png',
      imgAlt: 'NodeJS logo',
    },
    {
      imgName: '../../assets/images/techLogo/mongodb-logo.png',
      imgAlt: 'MongoDB logo',
    },
  ];
  constructor() {}
}
