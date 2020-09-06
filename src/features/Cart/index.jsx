import React, { Component } from 'react';
// import {Fade} from 'react-reveal/Fade'
import './style.css'
import { connect } from 'react-redux'
import {addToCart, changeQuantity, removeFromCart} from '../../actions/cartActions';
import formatCurrency from "../../utlis";

class Cart extends Component {
  render() {
    return (
      <ul className="cart-items">
        <li className="header">
          <p>Product</p><p>Price</p><p>Quantity</p><p>Total</p>
        </li>
        {this.props.cartItems.map((item) => (
            <li key={item._id} className='cart-item'>
              <div className='title'>
                <button
                    className="slimButton closeButton"
                    onClick={() => this.props.removeFromCart(item)}
                />
                <img src={item.image} alt={item.title}/>
                <div>{item.title}</div>
              </div>
              <p className="price">{formatCurrency(item.price)}</p>
              <div className="quantity">
                <button
                    className="slimButton"
                    onClick={() => this.props.changeQuantity(item, "+")}
                >
                  +
                </button>
                <span className='count'>{item.count}</span>
                <button
                    className="slimButton"
                    onClick={() => this.props.changeQuantity(item, "-")}
                >
                  -
                </button>
              </div>
              <div className="total">
                {formatCurrency(item.price * item.count)}
              </div>
            </li>
        ))}
        <li className="footer">
          <span>Total: {formatCurrency(this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0) )}</span>
        </li>
      </ul>
    );
  }
}


export default connect(
  (state) => ({
    // order: state.order.order,
    cartItems: state.cart.cartItems,
  }),
  { addToCart, removeFromCart, changeQuantity }
)(Cart);