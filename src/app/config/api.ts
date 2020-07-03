import {environment} from 'src/environments/environment';
export const baseUrl = environment.production ? 'http://localhost:3000' : 'http://localhost:3000';

/////////////  Product //////////////////////////////////////////

export const productsUrl = baseUrl + '/product/products';
export const productUrl =baseUrl + '/product/';


/////////////  Cart Item //////////////////////////////////////////
export const AddcartUrl = baseUrl + '/cart/addCarts';
export const GetcartUrl = baseUrl + '/cart/getCarts';
export const DeletecartUrl = baseUrl + '/cart/deleteCarts';

/////////////  Wish List //////////////////////////////////////////

export const getWishListUrl = baseUrl + '/wishlist/wishlists';
export const addWishListUrl = baseUrl + '/wishlist/addwishlist';
export const deleteWishListUrl = baseUrl + '/wishlist/deletewishlist';

