import React from 'react';
import Link from 'gatsby-link';
import { FaBars } from 'react-icons/fa';
import { func } from 'prop-types';
import logo from './logo.png';

const Menu = ({ onMenuItemClick, onTriggerClick }) => (
  <div className="Menu">
    <FaBars
      className="sidenav-trigger"
      color="#ffffff"
      size={36}
      onClick={onTriggerClick}
    />
    <h1>
      <Link className="Menu-item logo" href="/" to="/" activeClassName="active">
        <img alt="logo" height="80" src={logo} />
      </Link>
    </h1>
    <div className="Menu-list flex flex-center flex-sb">
      <button
        type="button"
        onClick={() => onMenuItemClick('services')}
        className="Menu-item"
      >
        Our Services
      </button>
      <button
        type="button"
        onClick={() => onMenuItemClick('about')}
        className="Menu-item"
      >
        About Us
      </button>
      <Link
        href="/careers"
        to="/careers"
        className="Menu-item"
        activeClassName="active"
      >
        Careers
      </Link>
      <Link
        href="/blog"
        to="/blog"
        className="Menu-item"
        activeClassName="active"
      >
        Blog
      </Link>
      <button
        type="button"
        onClick={() => onMenuItemClick('contact')}
        className="Menu-item btn animated-button thar-one"
      >
        Contact Us
      </button>
    </div>
  </div>
);

Menu.propTypes = {
  onMenuItemClick: func.isRequired,
  onTriggerClick: func.isRequired,
};

export default Menu;
