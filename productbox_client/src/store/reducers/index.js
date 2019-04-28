import {combineReducers} from 'redux';

import products from './products';
import form from './form';
import cart from './cart';

const rootReducer = combineReducers({
  products,
  form,
  cart
});

export default rootReducer;