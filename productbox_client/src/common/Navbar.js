import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({cartItems}) => {
	
	
  return (
		<header>
				<h2>
					<Link to="/">
					<i className="fas fa-shopping-bag" style={{paddingRight: 10}}></i>
						Rando Store
					</Link>
				</h2>
				<nav>
          <ul>
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/products">Product</Link></li>
            <li ><Link to="#"><i className="fas fa-cart-arrow-down"/>({cartItems || 0})</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
				</nav>
		</header>
  )
}

export default Navbar;