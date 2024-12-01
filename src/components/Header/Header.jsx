import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import shipLogo from '../../assets/shipLogo.webp';
import profileIcon from '../../assets/profile.webp';
import basketIcon from '../../assets/basket.webp';
import searchIcon from '../../assets/searchIcon.png';
import "../Header/Header.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/register');
  };

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
        <img 
          className='headerIconsItem' 
          src={profileIcon} 
          alt="Profile Icon" 
          onClick={handleProfileClick} 
        />
      </div>
    </header>
  );
};

export default Header;
