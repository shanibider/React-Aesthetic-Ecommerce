import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from 'react-router-dom';
import { useState } from 'react';
import Header from './common/header/Header';
import Pages from './pages/pages';
import Sdata from './components/shop/Sdata';
import Data from './components/flashDeals/Data';

import Cart from './common/cart/Cart';

function App() {
  // step 1: fetch data from database
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [CartItem, setCartItem] = useState([]);

  // step 4: add product to cart
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    // step 2: check if product is already in cart
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      // step 3: if product is not in cart, add it to cart
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  //decrease quantity of product in cart
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <div>
          <Header CartItem={CartItem} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Pages
                  productItems={productItems}
                  addToCart={addToCart}
                  shopItems={shopItems}
                />
              }
            />
            <Route
              exact
              path="/cart"
              element={
                <Cart
                  CartItem={CartItem}
                  addToCart={addToCart}
                  decreaseQty={decreaseQty}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
