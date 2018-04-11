import React from 'react';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <span>&copy; {new Date().getFullYear()} | Data Peace | All rights reserved </span>
  </div>
);

export default Footer;
