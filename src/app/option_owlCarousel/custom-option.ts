import { OwlOptions } from 'ngx-owl-carousel-o/public_api';

export const customOptions: OwlOptions = {
  loop: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: [
    '<i class="fa fa-caret-left"></i>',
    '<i class="fa fa-caret-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    740: {
      items: 2,
    },
    940: {
      items: 2,
    },
    1100: {
      items: 3,
    },
  },
  nav: true,
};
