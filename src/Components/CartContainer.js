import React from 'react';
import CartItem from './CartItem';
import {connect} from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../actions";

const CartContainer = ({ cart=[], total, dispatch }) => {
  React.useEffect(() => {
    dispatch({type: GET_TOTALS});
  }, [cart, dispatch]);

  if(cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>장바구니</h2>
          <h4 className="empty-cart">비어있습니다</h4>
        </header>
      </section>
    )
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>장바구니</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            TOTAL <span>{total}만원</span>
          </h4>
        </div>
        <button 
          className="btn clear-btn"
          onClick={()=>dispatch({type: CLEAR_CART})}
        >장바구니 비우기</button>
      </footer>
    </section>
  )
}

function mapStateToProps(store) {
  const { cart, total } = store;
  return {cart, total }
}

export default connect(mapStateToProps)(CartContainer)