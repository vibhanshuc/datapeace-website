import React from 'react';
import './footer.scss';

const Footer = () => (
  <div className="footer dark-container">
    <span>&copy; {new Date().getFullYear()} | DataPeace | All rights reserved </span>
  </div>
);

export default Footer;
