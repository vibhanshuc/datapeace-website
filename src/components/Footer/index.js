import React from 'react'
import Link from 'gatsby-link'

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 5px',
}

const Footer = () => (
  <div
    style={{
      background: 'rebeccapurple',
      padding: '1rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
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

export default Footer
