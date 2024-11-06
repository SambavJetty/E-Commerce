import React from 'react'
import './hero.css'
import heroLeftimg from '../Assets/heroLeft.svg'
import heroRightimg from '../Assets/heroRight.svg'

const topHeader = () => {
  return (
    <div topheader>
      <div className='topheader-container'>
        <div className='topheader-left'>
          <img src={heroLeftimg} alt="" />
        </div>
        <div class="divider"></div>
        <div className='topheader-right'>
          <img src={heroRightimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default topHeader
