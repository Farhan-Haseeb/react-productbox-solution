import {ADD_TO_CART} from '../actionTypes';

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item
  }
}