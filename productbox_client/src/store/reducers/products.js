import {LOAD_PRODUCTS, REMOVE_PRODUCT} from '../actionTypes';

export default (state = [], action) => {
  switch(action.type){
    case LOAD_PRODUCTS: 
      return [...action.products];
      case REMOVE_PRODUCT:
        return state.filter(product => product.id !== action.id);
    default: 
      return state
  }
}