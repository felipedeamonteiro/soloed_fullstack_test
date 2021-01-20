/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import produce from 'immer';
import { ICartState, ActionTypes } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addProductToCart: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.name === product.name,
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }
        break;
      }
      case ActionTypes.removeProductFromCart: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.name === product.name,
        );

        if (productInCartIndex >= 0) {
          draft.items.splice(productInCartIndex, 1);
        }
        break;
      }
      case ActionTypes.updateProductQuantity: {
        const { cartItem, quantity } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.name === cartItem.product.name,
        );

        if (productInCartIndex >= 0) {
          if (quantity === 0) {
            draft.items.splice(productInCartIndex, 1);
          } else {
            draft.items[productInCartIndex].quantity = Number(quantity);
          }
        }
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
