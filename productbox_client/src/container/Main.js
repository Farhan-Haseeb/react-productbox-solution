import React from 'react';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import Products from '../components/Products';
import Form from '../common/Form';
import Checkout from '../components/Checkout';
import {Switch, Route} from 'react-router-dom';
import Edit from '../common/Edit';

const Main = ({cart}) => {
  let count = cart.length;
  localStorage.setItem("cart_count", String(count));

  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props}/>}/>
        <Route exact path="/products" render={() => <Products />}/>
        <Route exact path="/products/new_product" render={() => <Form />}/>
        <Route exact path="/checkout" render={() => <Checkout />}/>
        <Route exact path="/cart" render={() => <Checkout />}/>
        <Route exact path="/product/edit_product" 
        render={() => <Form />}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products
  }
}
export default connect(mapStateToProps,{}) (Main);
