import PageManager from '../PageManager';
import Carousel from './components/Carousel';

export default class Home extends PageManager {
  constructor() {
    super();
    this.$body = $(document.body);
  }

  loaded(next) {
    this.Carousel = new Carousel({
      el: '[data-carousel-slides]',
      delay: this.context.carouselDelay,
      nav: '[data-carousel-pagination]',
    });
    
    next();
  }
}
