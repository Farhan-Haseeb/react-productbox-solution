import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    fetchProducts, 
    loadProducts, 
    removeProduct, 
    } from '../store/actions/products';
import {addToCart} from '../store/actions/cart';
import {Link} from 'react-router-dom';
import Product from '../common/Product';

class Products extends Component {
  componentWillMount(){
    this.props.fetchProducts();
  }
  render() {
    const {removeProduct, addToCart} = this.props;
    const products = localStorage.setItem("products", JSON.stringify(this.props.products))

    let productList = JSON.parse(localStorage.getItem("products")).map(p => (
      <Product
        removeProduct={removeProduct.bind(this, p.id)}
        addToCart={addToCart.bind(this, p)}
        id={p.id}
        key={p.id}
        imgSrc={p.img}
        name={p.name}
        price={p.price}
      />
    ));
    return(
      <div>
        <Link to="products/new_product"
          className="btn btn-warning put_item">
          Put item for sale
        </Link>

      <div className="product_container">
        {productList}
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    products: state.products
  }
}

export default connect(mapStateToProps, 
    {fetchProducts, 
    loadProducts,
    removeProduct,
    addToCart
  })(Products);
