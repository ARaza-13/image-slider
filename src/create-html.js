import batmanArkhamAsylum from './assets/imgs/batman-arkham-asylum.jpg';

export default class CreateHtml {
  static initializeHtml() {
    this.createPageElements();
    this.createImageFrame();
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

  static createImageFrame() {
    const imageFrame = document.createElement('div');
    imageFrame.classList.add('image-frame');
    imageFrame.setAttribute('id', 'image-frame');

    const main = document.getElementById('main');
    main.appendChild(imageFrame);
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
}
