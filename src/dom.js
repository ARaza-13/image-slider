import CreateHtml from './create-html';
import { imageFolder } from './image-folder';
import Controller from './controller';

export default class DOMManager {
  static initialize() {
    CreateHtml.initializeHtml();
    DOMManager.loadImages();
    DOMManager.loadFirstImage();
    Controller.initArrowButtons();
  }

  static loadImages() {
    imageFolder.forEach((image) => {
      CreateHtml.createImage(image);
    });
  }

  static loadFirstImage() {
    const img = document.querySelector('[data-image]');
    img.classList.add('active');
  }
}
