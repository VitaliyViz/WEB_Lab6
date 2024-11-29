// src/components/Cart/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../../redux/CartSlice';
import './Cart.scss';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  if (cartItems.length === 0) {
    return <p className='cartEmpty'>Your cart is empty.</p>;
  }

  return (
    <div className="cartPage">
      <h1>Your Cart</h1>
      <ul className="cartItems">
        {cartItems.map((item) => (
          <li key={item.id} className="cartItem">
            <img src={item.image} alt={item.name} />
            <div className="cartItemDetails">
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="cartItemActions">
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <button onClick={() => handleIncrement(item.id)}>+</button>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
