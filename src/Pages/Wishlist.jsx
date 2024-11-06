import React from 'react'
import WishlistItems from '../Components/WishlistItems/wishlistItems'
import JustForYouItems from '../Components/JustForYou/justForYou';

const Wishlist = () => {
  return (
    <div>
        <div>
            <WishlistItems/>
        </div>
        <div>
            <JustForYouItems/>
        </div>
    </div>
  )
}

export default Wishlist
