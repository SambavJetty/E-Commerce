import React, { useState } from 'react';
import './profileMenu.css';
import profileimg from '../Assets/profile.svg';
import bagimg from '../Assets/bag.svg';
import crossimg from '../Assets/cross.svg';
import starimg from '../Assets/star.svg';
import logoutimg from '../Assets/logout.svg';
import { Link } from 'react-router-dom';

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img src={profileimg} alt="Profile" onClick={toggleMenu} className="profile-icon" />

      {isOpen && (
        <div className="profile-menu-sidebar">
          <button className="close-btn" onClick={toggleMenu}>✕</button>
          <div className="menu-item">
            <Link to={'/myaccount'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={profileimg} alt="Manage My Account" className="menu-icon-profile" />
            <span>Manage My Account</span>
            </Link>
          </div>

          <div className="menu-item">
            <img src={bagimg} alt="My Order" className="menu-icon" />
            <span>My Order</span>
          </div>
          <div className="menu-item">
            <img src={crossimg} alt="My Cancellations" className="menu-icon" />
            <span>My Cancellations</span>
          </div>
          <div className="menu-item">
            <img src={starimg} alt="My Reviews" className="menu-icon" />
            <span>My Reviews</span>
          </div>
          <div className="menu-item">
            <img src={logoutimg} alt="Logout" className="menu-icon" />
            <span>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
