export class Product {
  iD: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
constructor(iD, name, description = '', price = 0, imageUrl = 'assets/pictureGallery/20200528_145826.jpg')
{
  this.iD = iD;
  this.name = name;
  this.description = description;
  this.price = price;
  this.imageUrl = imageUrl;

}

}

