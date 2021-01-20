import { IProduct, ICartItem, ActionTypes } from './types';

export function addProductToCart(product: IProduct): any {
  return {
    type: ActionTypes.addProductToCart,
    payload: {
      product,
    },
  };
}

export function RemoveProductFromCart(product: IProduct): any {
  return {
    type: ActionTypes.removeProductFromCart,
    payload: {
      product,
    },
  };
}

export function updateQuantity(cartItem: ICartItem, quantity: number): any {
  return {
    type: ActionTypes.updateProductQuantity,
    payload: {
      cartItem,
      quantity,
    },
  };
}
