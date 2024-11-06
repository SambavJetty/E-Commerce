import React from 'react';
import './NewArrival.css';
import newArrivalBannerimg from '../Assets/newArrivalBanner.svg'

const NewArrival = () => {
  return (
    <div className='new-arrival'>
      <div className='new-arrival-container'>
        <img src={newArrivalBannerimg} alt="" />
      </div>
    </div>
  )
}

export default NewArrival
