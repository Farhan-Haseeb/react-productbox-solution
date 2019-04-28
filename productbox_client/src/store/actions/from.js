import {apiCall} from '../../services/api';

import {
    NAME_CHANGED,
    PRICE_CHANGED,
    IMAGE_URL_CHANGED,
    CREATED
    } from '../actionTypes';

export const created = () => {
  return {
    type: CREATED
  }
}

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  }
}

export const priceChanged = (text) => {
  return {
    type: PRICE_CHANGED,
    payload: text
  }
}

export const imgUrlChanged = (text) => {
  return {
    type: IMAGE_URL_CHANGED,
    payload: text
  }
}

export const addProduct = (name, price, imgUrl) => {
  return ((dispatch) => {
    return apiCall('POST', "/items", {name, price, imgUrl})
    .then(res => {})
    .catch((err) => console.log(err));
  })
}