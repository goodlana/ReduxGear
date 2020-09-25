import React from 'react';
import cartItems from './cart-items'
import NavBar from './NavBar';
import CartContainer from './CartContainer';
import { createStore } from 'redux';

function reducer() {
  console.log("shake and bake");
}
const store = createStore(reducer);

function App() {
  return (
    <main>
      <NavBar />
      <CartContainer cart={cartItems}/>
    </main>
  );
}

export default App;
