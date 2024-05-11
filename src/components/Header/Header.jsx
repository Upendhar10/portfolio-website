import React from 'react';

import Navbar from './Navbar';
import Hero from './Hero';

const Header = () => {
  return (
    <div className='Header'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Header;