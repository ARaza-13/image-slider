export default class ImageFolder {
  constructor() {
    this.images = [];
    this.nextImageId = 0;
  }

  getImages() {
    return this.images;
  }

  getImage(imageId) {
    return this.images.find((image) => image.imageId === imageId);
  }

  setNextImageId(image) {
    image.imageId = this.nextImageId += 1;
  }

  addImage(newImage) {
    this.images.push(newImage);
  }
}
