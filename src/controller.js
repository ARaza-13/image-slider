export default class Controller {
  static initArrowButtons() {
    const nextArrow = document.getElementById('next-image');
    const previousArrow = document.getElementById('previous-image');

    nextArrow.addEventListener('click', Controller.goToNextImage);
    previousArrow.addEventListener('click', Controller.goToPreviousImage);
  }

  static goToNextImage() {
    console.log('NEXT IMAGE LOADING');
  }

  static goToPreviousImage() {
    console.log('PREVIOUS IMAGE LOADING');
  }
}
