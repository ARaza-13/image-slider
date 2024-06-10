export default class CreateHtml {
  static initializeHtml() {
    this.createPageElements();
    this.createImageCarouselContainer();
    this.createImageSlideshow();
    this.createImageBubbleFrame();
    this.createPreviousArrow();
    this.createImageFrame();
    this.createNextArrow();
    this.createImages();
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

  static createImageCarouselContainer() {
    const imageCarousel = document.createElement('div');
    imageCarousel.classList.add('image-carousel');
    imageCarousel.setAttribute('id', 'image-carousel');

    const main = document.getElementById('main');
    main.appendChild(imageCarousel);
  }

  static createImageSlideshow() {
    const slideshow = document.createElement('div');
    slideshow.classList.add('image-slideshow');
    slideshow.setAttribute('id', 'image-slideshow');

    const imageCarousel = document.getElementById('image-carousel');
    imageCarousel.appendChild(slideshow);
  }

  static createImageFrame() {
    const imageFrame = document.createElement('div');
    imageFrame.classList.add('image-frame');
    imageFrame.setAttribute('id', 'image-frame');

    const slideshow = document.getElementById('image-slideshow');
    slideshow.appendChild(imageFrame);
  }

  static createImages() {
    const images = document.createElement('div');
    images.classList.add('images');
    images.setAttribute('id', 'images');

    const imageFrame = document.getElementById('image-frame');
    imageFrame.appendChild(images);
  }

  static createImage(image) {
    const img = document.createElement('img');
    img.classList.add('image');
    img.setAttribute('data-image', '');
    img.src = image;

    const images = document.getElementById('images');
    images.appendChild(img);
  }

  static createNextArrow() {
    const nextArrow = document.createElement('span');
    nextArrow.classList.add('material-symbols-outlined');
    nextArrow.classList.add('arrow');
    nextArrow.classList.add('next-image');
    nextArrow.setAttribute('id', 'next-image');
    nextArrow.textContent = 'keyboard_arrow_right';

    const slideshow = document.getElementById('image-slideshow');
    slideshow.appendChild(nextArrow);
  }

  static createPreviousArrow() {
    const previousArrow = document.createElement('span');
    previousArrow.classList.add('material-symbols-outlined');
    previousArrow.classList.add('arrow');
    previousArrow.classList.add('previous-image');
    previousArrow.setAttribute('id', 'previous-image');
    previousArrow.textContent = 'keyboard_arrow_right';

    const slideshow = document.getElementById('image-slideshow');
    slideshow.appendChild(previousArrow);
  }

  static createImageBubbleFrame() {
    const imageBubbleFrame = document.createElement('div');
    imageBubbleFrame.classList.add('image-bubbles');
    imageBubbleFrame.setAttribute('id', 'image-bubbles');

    const imageCarousel = document.getElementById('image-carousel');
    imageCarousel.appendChild(imageBubbleFrame);
  }

  static createImageBubble() {
    const imageBubble = document.createElement('div');
    imageBubble.classList.add('image-bubble');

    const imageBubbleFrame = document.getElementById('image-bubbles');
    imageBubbleFrame.appendChild(imageBubble);
  }
}
