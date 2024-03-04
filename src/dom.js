import CreateHtml from './create-html';
import { imageFolder } from './image-folder';

export default class DOMManager {
  static initialize() {
    CreateHtml.initializeHtml();
    DOMManager.loadImages();
    DOMManager.loadFirstImage();
  }

  static loadImages() {
    imageFolder.forEach((image) => {
      CreateHtml.createImage(image);
    });
  }

  static loadFirstImage() {
    const img = document.querySelector('.image');
    img.classList.add('active');
  }
}
