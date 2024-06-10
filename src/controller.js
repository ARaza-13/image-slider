export default class Controller {
  static initArrowButtons() {
    const nextArrow = document.getElementById('next-image');
    const previousArrow = document.getElementById('previous-image');

    nextArrow.addEventListener('click', Controller.goToNextImage);
    previousArrow.addEventListener('click', Controller.goToPreviousImage);
  }

  static goToNextImage() {
    const images = Array.from(document.querySelectorAll('[data-image]'));
    const activeIndex = images.findIndex((image) =>
      image.classList.contains('active')
    );

    // if the "active" image was found
    if (activeIndex !== -1) {
      images[activeIndex].classList.remove('active');

      // determine index of next item
      let nextIndex = activeIndex + 1;
      // if last array item is 'active", set next index to the first item
      if (nextIndex === images.length) {
        nextIndex = 0;
      }

      images[nextIndex].classList.add('active');
    }
  }

  static goToPreviousImage() {
    const images = Array.from(document.querySelectorAll('[data-image]'));
    const activeIndex = images.findIndex((image) =>
      image.classList.contains('active')
    );

    // if the "active" image was found
    if (activeIndex !== -1) {
      images[activeIndex].classList.remove('active');

      // determine index of previous item
      let previousIndex = activeIndex - 1;
      // if first array item is 'active", set previous index to the last item
      if (previousIndex === -1) {
        previousIndex = images.length - 1;
      }

      images[previousIndex].classList.add('active');
    }
  }
}
