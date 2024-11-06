import React from 'react'
import './topHeader.css'
import topHeaderimg from '../Assets/topHeader.svg'

const topHeader = () => {
  return (
    <div className='topHeader'>
      <img src={topHeaderimg} alt="" />
    </div>
  )
}

export default topHeader
