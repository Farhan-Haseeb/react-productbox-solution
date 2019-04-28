import React from 'react';

const Button = ({clicked, text, classes, type}) => {
  return (
    <button 
      onClick={clicked}
      type={type} 
      className={classes}>
      {text}
    </button>
  )
}

export default Button;