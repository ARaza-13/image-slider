import CreateHtml from './create-html';
import { images } from './image-folder';

export default class DOMManager {
  static initialize() {
    CreateHtml.initializeHtml();
    DOMManager.loadImages();
  }

  static loadImages() {
    images.forEach((image) => {
      console.log(image);
    });
  }
}
