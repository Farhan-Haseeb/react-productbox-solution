import React from 'react';
import {Link} from 'react-router-dom';


const Homepage = (props) => {
  return (
    <div className="home-hero">
      <h1>What's Happening?</h1>
      <h4>Lets buy something!!</h4>
      <Link to='/products' className='btn btn-primary'>
        Get going
      </Link>
    </div>
  );
}

export default Homepage;