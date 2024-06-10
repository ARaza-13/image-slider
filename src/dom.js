import CreateHtml from './create-html';
import { imageFolder } from './image-folder';
import Controller from './controller';

export default class DOMManager {
  static initialize() {
    CreateHtml.initializeHtml();
    DOMManager.loadImages();
    DOMManager.loadFirstImage();
    Controller.initArrowButtons();
    DOMManager.loadImageBubbles();
    DOMManager.loadFirstBubble();
    Controller.initBubbleButtons();
  }

  static loadImages() {
    imageFolder.forEach((image, index) => {
      CreateHtml.createImage(image, index);
    });
  }

  static loadFirstImage() {
    const img = document.querySelector('[data-image="0"]');
    img.classList.add('active');
  }

  static loadImageBubbles() {
    for (let i = 0; i < imageFolder.length; i++) {
      CreateHtml.createImageBubble(i);
    }
  }

  static loadFirstBubble() {
    const bubble = document.querySelector('[data-bubble="0"]');
    bubble.classList.add('active');
  }
}
