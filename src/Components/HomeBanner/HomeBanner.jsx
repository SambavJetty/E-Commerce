import React from 'react'
import './HomeBanner.css'
import homeBannerimg from '../Assets/homeBanner.svg'

const HomeBanner = () => {
  return (
    <div className='homebanner'>
        <div className='homebanner-container'>
            <img src={homeBannerimg} alt="" />
        </div>
      
    </div>
  )
}

export default HomeBanner
