import React from 'react'
import CartItems from '../Components/CartItems/cartItems'
import couponCodeimg from '../Components/Assets/couponCode.svg'
import './CSS/Cart.css'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/checkout'); // Redirect to /checkout on button click
  };
  return (
    <div className='cart'>
      <div className='cart-container'>
        <CartItems/>
        <div className='cart-bottom'>
          <img src={couponCodeimg} alt="" />
          <div className='cart-total'>
              <h3>Cart Total</h3>
              <div className="cart-total-row">
                <span>Subtotal:</span>
                <span>${1750}</span>
              </div>
              <div className="cart-total-row">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="cart-total-row total">
                <span>Total:</span>
                <span>${1750}</span>
              </div>
              <button className="checkout-button" onClick={handleCheckout}>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
