import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price
        shipping = shipping + product.shipping;
    }
    const txt = parseFloat((total * 0.1).toFixed(2))
  const grandTotal = total + shipping + txt;
    return (
      <div className="cart">
        <h6>Order Summary:</h6>
        <h6>select Items : {cart.length}</h6>
        <p>Total price: ${total} </p>
        <p>Total Shipping:${shipping} </p>
        <p>Text:{txt} </p>
        <h3>Grand Total:{grandTotal.toFixed(2)} </h3>
      </div>
    );
};

export default Cart;