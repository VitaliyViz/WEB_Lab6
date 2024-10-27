import React from 'react';
import shipLogo from '../../assets/shipLogo.webp';
import profileIcon from '../../assets/profile.webp';
import basketIcon from '../../assets/basket.webp';
import searchIcon from '../../assets/searchIcon.png';
import "../Header/Header.scss"

const Header = () => {
  return (
    <header className='header'>
        <div className='headerLogo'>
            <img className='headerLogoIcon' src={shipLogo} alt="Ship Logo" />
            <span className='headerLogoName'> SailBay </span>
        </div>
        
        <div className='headerSearch'>
            <input type="text" className="headerSearchInput" placeholder='Search here'/>
            <img className='headerSearchIcon' src={searchIcon} alt="Search Icon" />
        </div>
        <div className='headerIcons'>
            <img className='headerIconsItem' src={basketIcon} alt="Basket Icon" />
            <img className='headerIconsItem' src={profileIcon} alt="Profile Icon" />
        </div>

    </header>
  );
};
export default Header