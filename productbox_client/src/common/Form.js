import React, {Component} from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import Input from './Input';
import {
  nameChanged, 
  priceChanged, 
  imgUrlChanged,
  addProduct,
  created
} from '../store/actions/from';

class Form extends Component{
  componentWillMount(){
    console.log(this.props)
  }

	onNameChange = (event) => {
		this.props.nameChanged(event.target.value)
	}
	onPriceChange = (event) =>{
		this.props.priceChanged(event.target.value)
	}
	onImgUrlChange = (event) =>{
		this.props.imgUrlChanged(event.target.value)
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const {name, price, imgUrl} = this.props.product;
    this.props.addProduct(name,price,imgUrl)
      .then(res => {this.props.created()})
      .catch(err => console.log(err))
	}

  render(){
    return(
      <div className="row justify-content-md-center text-center">
        <div className="col-md-4">
          <form onSubmit={this.handleSubmit}>
            <h2>Add New Item for Sale</h2>
            <Input
              label = "Name"
              type = "text"
              onChangeText = {this.onNameChange.bind(this)}
              value = {this.props.name}
            />
            <Input
              label = "Price"
              type = "number"
              onChangeText = {this.onPriceChange.bind(this)}
              value = {this.props.price}
            />
            <Input
              label = "Image URL"
              type = "text"
              onChangeText = {this.onImgUrlChange.bind(this)}
              value = {this.props.imgUrl}
            />
            <Button
							type = "submit"
							classes = "btn btn-primary btn-block btn-md space"
							text = "Put it"
              /> 
          </form>
        </div>
      </div>
    )
  }
}
  
const mapStateToProps = (state) => {
  const {name, price, imgUrl} = state.form;
  return {name, price, imgUrl, product: state.form};
}

export default  connect(mapStateToProps, 
  {nameChanged, 
  priceChanged, 
  imgUrlChanged,
  addProduct,
  created
})(Form);