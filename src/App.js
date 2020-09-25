import React from 'react';
import cartItems from './cart-items'
import NavBar from './NavBar';
import CartContainer from './CartContainer';
import { createStore } from 'redux';

const initialStore = {
  count: 78
}

function reducer(state, action) {
  console.log({state, action});
  return state;
}

const store = createStore(reducer, initialStore);
console.log(store.getState())

function App() {
  return (
    <main>
      <NavBar cart={store.getState()}/>
      <CartContainer cart={cartItems}/>
    </main>
  );
}

export default App;
