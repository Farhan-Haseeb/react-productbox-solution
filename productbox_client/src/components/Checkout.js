import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from '../common/Product';

class Checkout extends Component {
  render() {
    const cart = localStorage.setItem("checkout", JSON.stringify(this.props.cart))
    let checkoutList = JSON.parse(localStorage.getItem("checkout")).map(p => (
      <Product
        checkout
        id={p.id}
        key={p.id}
        imgSrc={p.img}
        name={p.name}
        price={p.price}
      />
    ));
    return(
      <div>
        <h2 className="checkout">Checked Items</h2>
        <div className="product_container">
          {checkoutList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    cart: state.cart
  }
}

export default connect(mapStateToProps, 
    {})(Checkout);
