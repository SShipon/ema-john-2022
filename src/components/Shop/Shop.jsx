import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart.jsx';
import Product from '../Product/Product.jsx';
import './Shop.css'

const Shop = () => {
  const [products, settProducts] = useState([])
  
  const [cart, setCart] = useState([])
   

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => settProducts(data))
  }, []);

  const handelAddToCart = (product) => {
    console.log('click');
    //cart.push(product)
    const newCart = [...cart, product]
    setCart(newCart);
  }
    return (
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              handelAddToCart={handelAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
         <Cart cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Shop;