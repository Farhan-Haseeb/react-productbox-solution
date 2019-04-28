import React from 'react';

const Input = ({label, value, onChangeText, placholder, type}) => {
  return (
    <div className = "space">
      <label htmlFor={label.toLowerCase()}>{label}:</label>
      <input
          className = "form-control"
          id = {label.toLowerCase()}
          name = {label.toLowerCase()}
          onChange = {onChangeText}
          value = {value}
          type = {type}
          placeholder = {placholder}
      />
    </div>
  )
}

export default Input;