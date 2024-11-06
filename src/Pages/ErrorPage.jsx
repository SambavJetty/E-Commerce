import React from 'react'
import errorHeaderimg from '../Components/Assets/errorHeader.svg'
import errorButtonimg from '../Components/Assets/errorButton.svg'
import { Link } from 'react-router-dom'
import  './CSS/ErrorPage.css'


const ErrorPage = () => {
  return (
    <div className='error'>
      <div className='error-container'>
        <img src={errorHeaderimg} alt="" />
        <Link to='/'><img src={errorButtonimg} alt="" /></Link>
      </div>
    </div>
  )
}

export default ErrorPage
