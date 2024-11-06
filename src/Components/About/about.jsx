import React from 'react'
import ourStoryimg from '../Assets/ourStory.svg'
import aboutBannerimg from '../Assets/aboutBanner.svg'
import aboutBarimg from '../Assets/aboutBar.svg'
import aboutPersonsimg from '../Assets/aboutPersons.svg'
import aboutFooterimg from '../Assets/aboutFooter.svg'
import './about.css'

const about = () => {
  return (
    <div className='about'>
      <div className='about-container'>
        <div className='about-top'>
          <img className='our-story' src={ourStoryimg} alt="" />
          <img className='about-banner' src={aboutBannerimg} alt="" />
        </div>
        <div className='about-bottom'>
          <img src={aboutBarimg} alt="" />
          <img src={aboutPersonsimg} alt="" />
          <img src={aboutFooterimg} alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default about
