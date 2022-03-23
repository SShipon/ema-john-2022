import React from 'react';
import './Product.css'
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  //const { product, handelAddToCart } = props;
    const { category, name, seller, price, stock, ratings, img } =
    props.product;
  
    return (
      <div className="product">
        <img src={img} alt="" srcset="" />
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p>Price: ${price}</p>
          <p>
            <small>Seller: {seller}</small>
          </p>
          <h6>Ratings: {ratings}</h6>
        </div>
        <button
          onClick={() => props.handelAddToCart(props.product)}
          className="btn-cart"
        >
          <p className='btn-cart-text'>Add To Cart</p>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    );
};

export default Product;