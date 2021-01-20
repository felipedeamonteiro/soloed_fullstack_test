// eslint-disable-next-line no-shadow
export enum ActionTypes {
  addProductToCart = 'ADD_PRODUCT_TO_CART',
  removeProductFromCart = 'REMOVE_PRODUCT_FROM_CART',
  updateProductQuantity = 'UPDATE_PRODUCT_QUANTITY',
}

export interface IProduct {
  name: string;
  short_description: string;
  image: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
