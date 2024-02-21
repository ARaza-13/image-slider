export default class Image {
  constructor(name, src, description, imageId) {
    this.name = name;
    this.src = src;
    this.description = description;
    this.imageId = imageId;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setSrc(src) {
    this.src = src;
  }

  getSrc(src) {
    return this.src;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  setImageId(imageId) {
    this.imageId = imageId;
  }

  getImageId() {
    return this.getImageId;
  }
}
