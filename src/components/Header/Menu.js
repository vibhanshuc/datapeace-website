import React from 'react';
import Link from 'gatsby-link';
import logo from './128x128_white.png';

const Menu = ({ onMenuItemClick }) => (
  <div className="Menu">
    <h1 className="flex-100">
      <Link className="Menu-item" href="/" to="/">
        <img
          alt="logo"
          height="80"
          src={logo}
        />
      </Link>
    </h1>
    <div className="flex flex-100 flex-center flex-sb">
      <button onClick={() => onMenuItemClick('skills')} className="Menu-item">Our Skills</button>
      <button onClick={() => onMenuItemClick('about')} className="Menu-item">About Us</button>
      <button onClick={() => onMenuItemClick('contact')} className="Menu-item btn">Contact Us</button>
    </div>
  </div>
);

export default Menu;
