import CreateHtml from './create-html';
import { imageFolder } from './image-folder';

export default class DOMManager {
  static initialize() {
    CreateHtml.initializeHtml();
    DOMManager.loadImages();
  }

  static loadImages() {
    imageFolder.forEach((image) => {
      CreateHtml.createImage(image);
    });
  }
}
