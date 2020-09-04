import React, {Component} from 'react';
import icon from './assets/shopping-cart.svg';
import { Provider } from "react-redux";
import Cart from "./containers/Cart";
import store from "./store";
import ProductsModal from "./features/ProductsModal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }
  handleModal = () => {
    this.setState({isModalOpen: !this.state.isModalOpen})
  }
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href='/'>Best ROCK & STONE shop</a>
            <button onClick={this.handleModal}><img src={icon} alt=''/></button>
          </header>
          <main>
            <Cart/>
            <ProductsModal isOpen={this.state.isModalOpen} handleModal={this.handleModal}/>
          </main>
          <footer>All right is reserved.</footer>
        </div>
      </Provider>
    );
  }
}

export default App;

