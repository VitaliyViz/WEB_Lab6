import React from 'react';
import '../Footer/Footer.scss';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footerContent">
          <div className="footerLogo">
            <span>SailBay</span>
          </div>
          <div className="footerLinks">
            <a href="/about" className="footerLink">About Us</a>
            <a href="/contact" className="footerLink">Contact</a>
            <a href="/policy" className="footerLink">Privacy Policy</a>
          </div>
          <div className="footerCopy">
            &copy; {new Date().getFullYear()} SailBay. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;