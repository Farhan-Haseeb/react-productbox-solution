import {apiCall} from '../../services/api';
import {LOAD_PRODUCTS, REMOVE_PRODUCT} from '../actionTypes';

export const loadProducts = (products) => {
  return {
    type: LOAD_PRODUCTS,
    products
  }
}

export const remove = id => {
  return{
      type: REMOVE_PRODUCT,
      id
  }
}

export const removeProduct = (product_id) => {
  return ((dispatch) => {
    return apiCall('DELETE', `/items/${product_id}`)
      .then(() => dispatch(remove(product_id)))
      .catch((err) => console.log(err))
  })
}


export const fetchProducts = () => {
  return ((dispatch) => {
    return apiCall('GET', '/items')
      .then((res) => {
        dispatch(loadProducts(res))
      })
      .catch((err) => {
        // dispatch(addError(err.message))
        // dispatch (console.log(err))
        console.log(err);
      })
  })
};