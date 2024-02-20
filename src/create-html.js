import batmanArkhamAsylum from './assets/imgs/batman-arkham-asylum.jpg';

export default class CreateHtml {
  static initializeHtml() {
    this.createPageElements();
    this.createImageSlideshow();
    this.createPreviousArrow();
    this.createImageFrame();
    this.createNextArrow();
    this.createImageSlides();
  }

  static createPageElements() {
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    header.classList.add('header');
    main.classList.add('main');
    footer.classList.add('footer');

    header.setAttribute('id', 'header');
    main.setAttribute('id', 'main');
    footer.setAttribute('id', 'footer');

    const body = document.querySelector('body');
    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
  }

  static createImageSlideshow() {
    const slideshow = document.createElement('div');
    slideshow.classList.add('image-slideshow');
    slideshow.setAttribute('id', 'image-slideshow');

    const main = document.getElementById('main');
    main.appendChild(slideshow);
  }

  static createImageFrame() {
    const imageFrame = document.createElement('div');
    imageFrame.classList.add('image-frame');
    imageFrame.setAttribute('id', 'image-frame');

    const slideshow = document.getElementById('image-slideshow');
    slideshow.appendChild(imageFrame);
  }

  static createImageSlides() {
    const images = document.createElement('div');
    images.classList.add('images');

    const image = this.createImage(batmanArkhamAsylum);

    const imageFrame = document.getElementById('image-frame');
    imageFrame.appendChild(image);
  }

  static createImage(src) {
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = src;

    return image;
  }

  static createNextArrow() {
    const nextArrow = document.createElement('span');
    nextArrow.classList.add('material-symbols-outlined');
    nextArrow.classList.add('next-image');
    nextArrow.textContent = 'keyboard_arrow_right';

    const slideshow = document.getElementById('image-slideshow');
    slideshow.appendChild(nextArrow);
  }

  static createPreviousArrow() {
    const previousArrow = document.createElement('span');
    previousArrow.classList.add('material-symbols-outlined');
    previousArrow.classList.add('previous-image');
    previousArrow.textContent = 'keyboard_arrow_right';

    const slideshow = document.getElementById('image-slideshow');
    slideshow.appendChild(previousArrow);
  }
}
