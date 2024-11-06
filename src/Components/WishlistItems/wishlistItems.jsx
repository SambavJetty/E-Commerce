import React, { useContext, useState, useEffect } from 'react';
import './wishlistItems.css';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/item';  // Import the Item component
import wishlistHeaderimg from '../Assets/wishlistHeader.svg'

const WishListItems = () => {
  const { allProducts, wishlistItems } = useContext(ShopContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      setProducts(allProducts);
    }
  }, [allProducts]);

  return (
    <div className='wishlist-items'>
      <div className='wishlist-items-container'>
        <div className='wishlist-header'>
          <img src={wishlistHeaderimg} alt="Wishlist Header" />
        </div>
        <div className='wishlist-items'>
          {products.length > 0 && products.some(product => wishlistItems && wishlistItems[product.id]) ? (
            products.map((product) => {
              const isInWishlist = wishlistItems && wishlistItems[product.id];
              if (isInWishlist) {
                return (
                  <div key={product.id} className='wishlist-item'>
                    <Item
                      id={product.id}
                      image={product.image || "path_to_placeholder_image.jpg"}
                      name={product.title}
                      new_price={product.price}
                      old_price={product.price + 14.8} // Example old price, adjust accordingly
                    />
                  </div>
                );
              }
              return null;
            })
          ) : (
            <p>Your wishlist is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WishListItems;
