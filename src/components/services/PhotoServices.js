export class PhotoServices {

  url = 'https://jsonplaceholder.typicode.com/photos'

  async getAllPhotos () {
    return await fetch(this.url)
        .then(value => value.json())
  }
}

