export default class Controller {
  constructor() {
    this.timer = null;
    this.isAutoSlideActive = false;

    this.logInterval = null;
    this.logCounter = 0;
  }

  static initArrowButtons() {
    const nextArrow = document.getElementById('next-image');
    const previousArrow = document.getElementById('previous-image');

    nextArrow.addEventListener('click', Controller.goToNextImage);
    previousArrow.addEventListener('click', Controller.goToPreviousImage);
  }

  static initBubbleButtons() {
    const imageBubbles = document.querySelectorAll('[data-bubble]');

    imageBubbles.forEach((imageBubble) =>
      imageBubble.addEventListener('click', Controller.switchImageBubble)
    );
  }

  static initPlayerButtons() {
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');

    playButton.onclick = () => {
      console.log('start');
      Controller.startAutoSlide();
    };
    pauseButton.onclick = () => {
      console.log('stop');
      Controller.stopAutoSlide();
    };
  }

  static goToNextImage() {
    const bubbles = Array.from(document.querySelectorAll('[data-bubble]'));
    const images = Array.from(document.querySelectorAll('[data-image]'));
    const activeIndex = images.findIndex((image) =>
      image.classList.contains('active')
    );

    // if the "active" image was found
    if (activeIndex !== -1) {
      images[activeIndex].classList.remove('active');
      bubbles[activeIndex].classList.remove('active');

      // determine index of next item
      let nextIndex = activeIndex + 1;
      // if last array item is 'active", set next index to the first item
      if (nextIndex === images.length) {
        nextIndex = 0;
      }

      images[nextIndex].classList.add('active');
      bubbles[nextIndex].classList.add('active');

      Controller.resetAutoSlide();
    }
  }

  static goToPreviousImage() {
    const bubbles = Array.from(document.querySelectorAll('[data-bubble]'));
    const images = Array.from(document.querySelectorAll('[data-image]'));
    const activeIndex = images.findIndex((image) =>
      image.classList.contains('active')
    );

    // if the "active" image was found
    if (activeIndex !== -1) {
      images[activeIndex].classList.remove('active');
      bubbles[activeIndex].classList.remove('active');

      // determine index of previous item
      let previousIndex = activeIndex - 1;
      // if first array item is 'active", set previous index to the last item
      if (previousIndex === -1) {
        previousIndex = images.length - 1;
      }

      images[previousIndex].classList.add('active');
      bubbles[previousIndex].classList.add('active');

      Controller.resetAutoSlide();
    }
  }

  static switchImageBubble(e) {
    const bubbleIndex = e.target.getAttribute('data-bubble');

    const bubbles = Array.from(document.querySelectorAll('[data-bubble]'));
    const images = Array.from(document.querySelectorAll('[data-image]'));
    const activeIndex = images.findIndex((image) =>
      image.classList.contains('active')
    );

    // if the "active" image was found
    if (activeIndex !== -1) {
      images[activeIndex].classList.remove('active');
      bubbles[activeIndex].classList.remove('active');

      images[bubbleIndex].classList.add('active');
      bubbles[bubbleIndex].classList.add('active');

      Controller.resetAutoSlide();
    }
  }

  static startAutoSlide() {
    if (!this.isAutoSlideActive) {
      this.isAutoSlideActive = true;
      this.timer = setInterval(() => {
        Controller.goToNextImage();
      }, 10000);
    }

    Controller.startLogTimer();
  }

  static stopAutoSlide() {
    this.isAutoSlideActive = false;
    clearInterval(this.timer);
    Controller.stopLogTimer();
  }

  static resetAutoSlide() {
    if (this.isAutoSlideActive) {
      Controller.stopAutoSlide();
      Controller.startAutoSlide();
    }
  }

  static startLogTimer() {
    this.logCounter = 0;
    this.logInterval = setInterval(() => {
      this.logCounter++;
      console.log(`Next slide in ${this.logCounter} seconds.`);
    }, 1000);
  }

  static stopLogTimer() {
    clearInterval(this.logInterval);
  }
}
