export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
constructor(id, name, description = '', price = 0, imageUrl = 'assets/pictureGallery/20200528_145826.jpg')
{
  this.id = id;
  this.name = name;
  this.description = description;
  this.price = price;
  this.imageUrl = imageUrl;

}

}

