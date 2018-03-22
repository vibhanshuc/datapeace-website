import React from 'react'
import Link from 'gatsby-link'

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 5px',
}

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
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
        <Link href="/" to="/" style={linkStyle}>
          <img
            style={{ marginBottom: 0 }}
            alt="logo"
            height="80"
            src="https://dl.dropbox.com/s/7ucsv1m2jhpj68l/128x128_white.png"
          />
        </Link>
      </h1>
      <div>
        <Link href="/blog" to="/blog" style={linkStyle}>
          Blog
        </Link>
        <Link href="/vision" to="/vision" style={linkStyle}>
          Vision
        </Link>
        <Link href="/contact" to="/contact" style={linkStyle}>
          Contact Us
        </Link>
      </div>
    </div>
  </div>
)

export default Header
