export class CartItem {
  productId: number;
  productName: string;
  
  qty: number;
  price: number;
constructor(productId,productName, qty = 1, price)
{
  this.productId = productId;
  this.productName = productName;
  this.qty = qty;
  this.price = price;
  
}
}
