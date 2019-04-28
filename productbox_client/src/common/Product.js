import React from 'react';
import {Link} from 'react-router-dom';

const Product = ({imgSrc, name, price, removeProduct, addToCart , id, checkout}) => {
  return (
    <div className="product_item">
      <Link to={"product/edit_product"}>
        <img className="product_image" alt="product" itemType="image" src={imgSrc} 
        />
        <div className="content">
          <div className="line"></div>
          <p>Name: {name}</p>
          <p>Price $$: {price}</p>
        </div>
      </Link>
      {checkout ? (
          <span></span>
      ):(
        <span className="btn_span">
          <a onClick={addToCart} className="btn btn-warning">Add to cart</a>
          <a onClick={removeProduct} className="btn btn-danger"><i className="fa fa-trash"></i></a>
        </span>
      )}
     
      
      
    </div>
  )
}


export default Product