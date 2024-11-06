import React, { useState,useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './navbar.css';
import navHomeimg from '../Assets/navHome.svg';
import navExclusiveimg from '../Assets/navExclusive.svg';
import navContactimg from '../Assets/navContact.svg';
import navAboutimg from '../Assets/navAbout.svg';
import navSignupimg from '../Assets/navSignup.svg';
import navWishimg from '../Assets/navWish.svg';
import navSearchimg from '../Assets/navSearch.svg';
import navCartimg from '../Assets/navCart.svg';
import ProfileMenu from '../ProfileMenu/profileMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const { getTotalWishlistItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className='nav-container'>
          <div className="nav-logo">
            <img src={navExclusiveimg} alt="Logo" />
          </div>
          <ul className="nav-menu">
            <li onClick={() => setMenu("home")}>
              <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
                <img src={navHomeimg} alt="Home" />
              </Link>
              {menu === "home" && <hr />}
            </li>
            <li onClick={() => setMenu("contact")}>
              <Link style={{ textDecoration: 'none', color: 'black' }} to={'/contact'}>
                <img src={navContactimg} alt="Contact" />
              </Link>
              {menu === "contact" && <hr />}
            </li>
            <li onClick={() => setMenu("about")}>
              <Link style={{ textDecoration: 'none', color: 'black' }} to={'/about'}>
                <img src={navAboutimg} alt="About" />
              </Link>
              {menu === "about" && <hr />}
            </li>
            <li onClick={() => setMenu("signup")}>
              <Link style={{ textDecoration: 'none', color: 'black' }} to={'/signup'}>
                <img src={navSignupimg} alt="Sign Up" />
              </Link>
              {menu === "signup" && <hr />}
            </li>
          </ul>
          <div className='nav-s-w-c-p'>
            <div className="nav-search-bar">
              <img src={navSearchimg} alt="Search" />
            </div>
            <div className="nav-wishlist">
              <Link to={'/wishlist'}>
                  <img src={navWishimg} alt="Wishlist" />
              </Link>
              <div className="nav-wish-count">{getTotalWishlistItems()}</div>
            </div>
            <div className='nav-cart'>
                  <Link to={'/cart'}>
                    <img src={navCartimg} alt="Cart" />
                  </Link>
                  <div className="nav-cart-count">{getTotalCartItems()}</div> 
            </div>
            <div className="nav-profile">
              <ProfileMenu />
            </div>

          </div>
      </div>
    </div>
  );
};

export default Navbar;
