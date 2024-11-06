import React from 'react'
import categoriesHeaderimg from '../Assets/categoriesHeader.svg'
import phonesimg from '../Assets/phones.svg'
import computersimg from '../Assets/computers.svg'
import smartwatchimg from '../Assets/smartwatch.svg'
import cameraimg from '../Assets/camera.svg'
import headphonesimg from '../Assets/headphones.svg'
import gamingimg from '../Assets/gaming.svg'
import './ShopCategory.css'

const ShopCategory = () => {
  return (
    <div className='categories'>
        <div className='categories-container'>
            <div className='categories-header'>
                <img src={categoriesHeaderimg} alt="" />
            </div>
            <div className='categories-main'>
                <img src={phonesimg} alt="" />
                <img src={computersimg} alt="" />
                <img src={smartwatchimg} alt="" />
                <img src={cameraimg} alt="" />
                <img src={headphonesimg} alt="" />
                <img src={gamingimg} alt="" />
            </div>
            <div className='categories-tail'>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default ShopCategory
