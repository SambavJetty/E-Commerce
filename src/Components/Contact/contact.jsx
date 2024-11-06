import React from 'react'
import './contact.css'
import contactSidebarimg from '../Assets/contactSidebar.svg'
import contactInputimg from '../Assets/contactInput.svg'

const contact = () => {
  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='contact-main'>
          <img className='contact-left' src={contactSidebarimg} alt="" />
          <img className='contact-right' src={contactInputimg} alt="" />
        </div>
      </div>
    </div>
  )
}


export default contact
