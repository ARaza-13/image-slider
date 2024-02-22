import Image from './image';
import batmanArkhamAsylum from './assets/imgs/batman-arkham-asylum.jpg';
import batmanArkhamCity1 from './assets/imgs/batman-arkham-city-1.jpg';
import batmanArkhamCity2 from './assets/imgs/batman-arkham-city-2.jpg';
import batmanArkhamKnight from './assets/imgs/batman-arkham-knight.jpg';
import batmanArkhamOrigins from './assets/imgs/batman-arkham-origins.jpg';
import marvelsSpiderman from './assets/imgs/marvels-spiderman.jpg';
import marvelsSpidermanMM from './assets/imgs/marvels-spiderman-miles-morales.jpg';
import marvelsSpiderman2 from './assets/imgs/marvels-spiderman-2.png';
import rain from './assets/imgs/rain.jpg';
import sunset from './assets/imgs/sunset.jpg';

export default class ImageFolder {
  constructor() {
    this.images = [];
    // this.nextImageId = 0;

    this.images.push(
      new Image(
        'Batman Arkham Asylum', // name
        batmanArkhamAsylum, // src
        'Batman Arkham Asylum', // description
        1 // ID
      )
    );
    this.images.push(
      new Image(
        'Batman Arkham City',
        batmanArkhamCity1,
        'Batman Arkham City',
        2
      )
    );
    this.images.push(
      new Image(
        'Batman Arkham Knight',
        batmanArkhamKnight,
        'Batman Arkham Knight',
        3
      )
    );
    this.images.push(
      new Image(
        "Marvel's Spider-Man 2",
        marvelsSpiderman2,
        "Marvel's Spider-Man 2",
        4
      )
    );
  }

  getImages() {
    return this.images;
  }

  getImage(imageId) {
    return this.images.find((image) => image.imageId === imageId);
  }

  // setNextImageId(image) {
  //   image.imageId = this.nextImageId += 1;
  // }

  addImage(newImage) {
    this.images.push(newImage);
  }
}
