import React from 'react';
import './footer.scss';

const Footer = () => (
  <div className="footer dark-container">
    <span className="secondary-text">All rights reserved {new Date().getFullYear()}</span>
  </div>
);

export default Footer;
