import React from 'react';
import { Link  } from 'react-router-dom';


const dropDown = () => {
  const header = document.getElementById("header");
  if (header.className === 'header') {
    header.className += " responsive";
  } else {
    header.className = "header";
  }
};

const Header = () => (
  <header id="header" className='header'>
        <div className="menu" onClick={dropDown}>
          <i className="fas fa-bars fa-2x"></i>
        </div>
        <Link className='header__title' to="/">
          <img src="/images/OCDevel-svg-light.svg" alt="OCDevel Logo" />
        </Link>
        <Link className="MLG-link" to='/mlg'>
          <span> Machine Learning Guide Podcast</span>
        </Link>




  </header>
);

export default Header;
