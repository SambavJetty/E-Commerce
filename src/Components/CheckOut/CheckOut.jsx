import React from 'react'
import checkoutHeaderimg from '../Assets/checkoutHeader.svg'
import checkoutLeftimg from '../Assets/checkoutLeft.svg'
import checkoutRightimg from '../Assets/checkoutRight.svg'
import './CheckOut.css'

const CheckOut = () => {
  return (
    <div className='checkout'>
        <div className='checkout-container'>
            <div className='checkout-header'>
                <img src={checkoutHeaderimg} alt="" />
            </div>
            <div className='checkout-main'>
                <div className='checkout-left'>
                    <img src={checkoutLeftimg} alt="" />
                </div>
                <div className='checkout-right'>
                    <img src={checkoutRightimg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckOut
