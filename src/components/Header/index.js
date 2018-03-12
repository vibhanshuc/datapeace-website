import React from 'react';
import Link from 'gatsby-link';

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 5px',
};

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={linkStyle}
        >
          <img height="80" src="https://dl.dropbox.com/s/7ucsv1m2jhpj68l/128x128_white.png" />
        </Link>
      </h1>
      <div>
        <Link
          to="/vision"
          style={linkStyle}
        >
          Vision
        </Link>
        <Link
          to="/contact"
          style={linkStyle}
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
