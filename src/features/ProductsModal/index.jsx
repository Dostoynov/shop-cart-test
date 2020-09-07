import React, {Component} from 'react';
import Zoom from 'react-reveal/Zoom'
import Modal from "react-modal";
import {fetchProducts} from "../../actions/productActions";
import {addToCart} from "../../actions/cartActions";
import {connect} from "react-redux";
import formatCurrency from "../../utlis";
import './style.css'

class ProductsModal extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  ProductItem = (product) =>
      <li key={product._id} className="product">
        <div>
          <img src={product.image} alt={product.title}/>
        </div>
        <p className='product-title'>{product.title}</p>
        <p className="product-price"> {formatCurrency(product.price)} </p>
        <button
            onClick={() => this.props.addToCart(product)}
            className="primaryBtn"
        >
          Add To Cart
        </button>
      </li>

  render () {
    return (
        <Modal isOpen={this.props.isOpen} onRequestClose={this.props.handleModal}>
          <Zoom>
            <button className="close-modal primaryBtn" onClick={this.props.handleModal}>
              x
            </button>
            {!this.props.products ?
                <div className='loading'>Loading...</div> :
                <ul className="products">
                  {this.props.products.map((product) => this.ProductItem(product))}
                </ul>
            }
          </Zoom>
        </Modal>
    );
  }
}

export default connect(
    (state) => ({ products: state.products.items }),
    {
      fetchProducts,
      addToCart,
    }
)(ProductsModal);
