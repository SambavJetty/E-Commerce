import React, { useContext, useState, useEffect } from 'react';
import './cartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import cartitemsheaderimg from '../Assets/cartitemsheader.svg';

const CartItems = () => {
  const { allProducts, cartItems = {} } = useContext(ShopContext); // Default to empty object
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Set products from allProducts in the context
    setProducts(allProducts);
  }, [allProducts]); // Update when allProducts changes

  return (
    <div className='cart-items'>
      <div className='cart-items-container'>
        <div className='cart-items-header'>
          <img src={cartitemsheaderimg} alt="Cart Header" />
        </div>
        <div className='cart-items-main'>
          {products.map((product) => {
            const quantity = cartItems[product.id] || 0; // Use 0 if item is not in cart
            if (quantity > 0) {
              return (
                <div key={product.id} className='cartitems-format-main'>
                  <div className='cartitems-img'>
                    <img src={product.image} alt={product.name}/>
                  </div>
                  <p className='cartitems-price'>${(product.price || 0).toFixed(2)}</p>
                  <p className='cartitems-quantity'>{quantity}</p>
                  <p>${((product.price || 0) * quantity).toFixed(2)}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
