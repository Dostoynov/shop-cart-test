import React, {Component} from 'react';
import icon from './assets/shopping-cart.svg';
import { Provider } from "react-redux";
import Cart from "./features/Cart";
import store from "./store";
import ProductsModal from "./features/ProductsModal";
import RedditModal from "./features/RedditModal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProductsModalOpen: false,
      isRedditModalOpen: false,
    };
  }
  handleProductsModal = () => {
    this.setState({isProductsModalOpen: !this.state.isProductsModalOpen})
  }
  handleRedditModal = () => {
    this.setState({isRedditModalOpen: !this.state.isRedditModalOpen})
  }
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href='/'>Best ROCK & STONE shop</a>
            <button className='redditButton' onClick={this.handleRedditModal}>Reddit for some reason</button>
            <button onClick={this.handleProductsModal}><img src={icon} alt=''/></button>
          </header>
          <main>
            <Cart/>
            <ProductsModal isOpen={this.state.isProductsModalOpen} handleModal={this.handleProductsModal}/>
            <RedditModal isOpen={this.state.isRedditModalOpen} handleModal={this.handleRedditModal}/>
          </main>
          <footer>All right is reserved.</footer>
        </div>
      </Provider>
    );
  }
}

export default App;

