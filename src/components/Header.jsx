import React from 'react';
import GlobeIcon from '../assets/globe.png';

function Header() {
  return (
    <header>
      <img className="logo" src={GlobeIcon} alt="globe icon" />
      <h1 className='title'>my travel journal</h1>
    </header>
  )
};

export default Header;