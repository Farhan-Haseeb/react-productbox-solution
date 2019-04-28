import {
    NAME_CHANGED, 
    PRICE_CHANGED, 
    IMAGE_URL_CHANGED,
    CREATED
  } from '../actionTypes';

const INITIAL_STATE = {
  name: "",
  price: 0,
  imgUrl: ""
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case NAME_CHANGED:
      return {...state, name: action.payload};
    case PRICE_CHANGED:
      return {...state, price: action.payload};
    case IMAGE_URL_CHANGED:
      return {...state, imgUrl: action.payload};
    case CREATED:
      return INITIAL_STATE;
    default:
      return state;

  }
}