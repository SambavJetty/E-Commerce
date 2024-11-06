import React from 'react'
import './CSS/Home.css'
import Hero from '../Components/Hero/hero'
import FlashSales from '../Components/FlashSales/FlashSales'
import ShopCategory from '../Components/ShopCategory/ShopCategory'
import BestSelling from '../Components/BestSelling/BestSelling'
import HomeBanner from  '../Components/HomeBanner/HomeBanner'
import OurProducts from '../Components/OurProducts/OurProducts'
import NewArrival from '../Components/NewArrival/NewArrival'
import HomeFooter from  '../Components/HomeFooter/HomeFooter'



const Shop = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <Hero/>
        <FlashSales/>
        <ShopCategory/>
        <BestSelling/>
        <HomeBanner/>
        <OurProducts/>
        <NewArrival/>
        <HomeFooter/>
      </div>
    </div>
  )
}

export default Shop
