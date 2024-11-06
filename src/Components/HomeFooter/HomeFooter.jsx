import React from 'react'
import './HomeFooter.css'
import aboutFooterimg from '../Assets/aboutFooter.svg'

const HomeFooter = () => {
  return (
    <div className='home-footer'>
      <div className='home-footer-container'>
        <img src={aboutFooterimg} alt="" />
      </div>
    </div>
  )
}

export default HomeFooter
