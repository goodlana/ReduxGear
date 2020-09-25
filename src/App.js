import React from 'react';
import NavBar from './Components/NavBar';
import CartContainer from './Components/CartContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducer';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <CartContainer />
    </Provider>
  );
}

export default App;
