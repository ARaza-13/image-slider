export default class CreateHtml {
  static initializeHtml() {
    this.createPageElements();
    this.createImagePlayer();
    this.createImagePlayerButtons();
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

  static createImagePlayer() {
    const imagePlayer = document.createElement('div');
    imagePlayer.classList.add('image-player');
    imagePlayer.setAttribute('id', 'image-player');

    const header = document.getElementById('header');
    header.appendChild(imagePlayer);
  }

  static createImagePlayerButtons() {
    const playIcon = document.createElement('span');
    playIcon.classList.add('material-symbols-outlined');
    playIcon.classList.add('icon', 'play-icon');
    playIcon.textContent = 'play_arrow';

    const playButton = document.createElement('button');
    playButton.classList.add('button');
    playButton.setAttribute('id', 'play-button');
    playButton.appendChild(playIcon);

    const pauseIcon = document.createElement('span');
    pauseIcon.classList.add('material-symbols-outlined');
    pauseIcon.classList.add('icon', 'pause-icon');
    pauseIcon.textContent = 'pause';

    const pauseButton = document.createElement('button');
    pauseButton.classList.add('button');
    pauseButton.setAttribute('id', 'pause-button');
    pauseButton.appendChild(pauseIcon);

    const imagePlayer = document.getElementById('image-player');
    imagePlayer.appendChild(playButton);
    imagePlayer.appendChild(pauseButton);
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

  static createImage(image, index) {
    const img = document.createElement('img');
    img.classList.add('image');
    img.setAttribute('data-image', `${index}`);
    img.src = image;

    const images = document.getElementById('images');
    images.appendChild(img);
  }

  static createNextArrow() {
    const nextArrow = document.createElement('span');
    nextArrow.classList.add('material-symbols-outlined');
    nextArrow.classList.add('arrow', 'next-arrow');
    nextArrow.textContent = 'keyboard_arrow_right';

    const nextButton = document.createElement('button');
    nextButton.classList.add('advance-image');
    nextButton.setAttribute('id', 'next-image');
    nextButton.appendChild(nextArrow);

    const slideshow = document.getElementById('image-slideshow');
    slideshow.appendChild(nextButton);
  }

  static createPreviousArrow() {
    const previousArrow = document.createElement('span');
    previousArrow.classList.add('material-symbols-outlined');
    previousArrow.classList.add('arrow', 'previous-arrow');
    previousArrow.textContent = 'keyboard_arrow_right';

    const previousButton = document.createElement('button');
    previousButton.classList.add('advance-image');
    previousButton.setAttribute('id', 'previous-image');
    previousButton.appendChild(previousArrow);

    const slideshow = document.getElementById('image-slideshow');
    slideshow.appendChild(previousButton);
  }

  static createImageBubbleFrame() {
    const imageBubbleFrame = document.createElement('div');
    imageBubbleFrame.classList.add('image-bubbles');
    imageBubbleFrame.setAttribute('id', 'image-bubbles');

    const imageCarousel = document.getElementById('image-carousel');
    imageCarousel.appendChild(imageBubbleFrame);
  }

  static createImageBubble(index) {
    const imageBubble = document.createElement('div');
    imageBubble.classList.add('image-bubble');
    imageBubble.setAttribute('data-bubble', `${index}`);

    const imageBubbleFrame = document.getElementById('image-bubbles');
    imageBubbleFrame.appendChild(imageBubble);
  }
}
