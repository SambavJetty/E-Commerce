import React, { useContext, useState } from 'react';
import './productDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import productDisplaytailimg from '../Assets/productDisplaytail.svg'
import { ShopContext } from '../../Context/ShopContext';
import wishlistimg from '../Assets/wishlist.svg'
import { useNavigate } from 'react-router-dom';

const ProductDisplay = (props) => {
    const { product = {} } = props;
    const { addToCart, wishlistItems, addToWishlist } = useContext(ShopContext);
    const navigate = useNavigate();  // Initialize useNavigate

    // State to track individual button clicks
    const [isCartClicked, setIsCartClicked] = useState(false);
    const [isBuyNowClicked, setIsBuyNowClicked] = useState(false);
    const [isWishClicked, setIsWishClicked] = useState(false);

    const handleAddToCart = () => {
        try {
            addToCart(product.id);
            setIsCartClicked(true); // Change the button text to "Added"
            setTimeout(() => setIsCartClicked(false), 2000); // Reset the button text after 2 seconds
        } catch (error) {
            console.log('Error adding product to cart:', error);
        }
    };

    const handleAddToWish = () => {
        try {
            addToWishlist(product.id);  // Toggles the wishlist state for the product
            setIsWishClicked(true); // Scale up the "Add to Wishlist" button when clicked
            setTimeout(() => setIsWishClicked(false), 200); // Reset the scale after the animation
        } catch (error) {
            console.log('Error adding product to wishlist:', error);
        }
    };

    const handleBuyNow = () => {
        try {
            setIsBuyNowClicked(true); // Scale up the "Buy Now" button when clicked
            setTimeout(() => setIsBuyNowClicked(false), 200); // Reset the scale after the animation
        } catch (error) {
            console.log('Error proceeding to buy:', error);
        }
        navigate('/checkout')
    };

    // Check if product is already in wishlist
    const isInWishlist = wishlistItems[product.id] === true;

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image || ''} alt="" />
                    <img src={product.image || ''} alt="" />
                    <img src={product.image || ''} alt="" />
                    <img src={product.image || ''} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image || ''} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name || 'Product Name'}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122 Reviews)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-new">
                        ${product.price || '0.00'}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    {product.description || 'Product Name'}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Size: </h1>
                    <div className="productdisplay-right-sizes">
                        <div>XS</div>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <div className='productdisplay-value'>
                    <button
                        onClick={handleAddToCart}
                        style={{
                            transition: 'transform 0.2s ease-in-out',
                            transform: isCartClicked ? 'scale(1.1)' : 'scale(1)',
                        }}
                    >
                        {isCartClicked ? 'Added' : 'Add To Cart'}
                    </button>
                    <button
                        onClick={handleBuyNow}
                        style={{
                            transition: 'transform 0.2s ease-in-out',
                            transform: isBuyNowClicked ? 'scale(1.1)' : 'scale(1)',
                        }}
                    >
                        Buy Now
                    </button>
                    <button
                        style={{
                            width: '50px',
                            background: 'white',
                            transition: 'transform 0.2s ease-in-out',
                            transform: isWishClicked ? 'scale(1.1)' : 'scale(1)',
                        }}
                        onClick={handleAddToWish}
                    >
                        <img
                            style={{
                                marginTop: '-13px',
                                marginLeft: '-20px',
                                width: '47px',
                                height: '47px',
                            }}
                            className={isInWishlist ? 'wishlist-icon-filled' : 'wishlist-icon'}
                            src={wishlistimg}
                            alt={isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        />
                    </button>
                </div>
                <div className='productdisplay-tail'>
                    <img src={productDisplaytailimg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
