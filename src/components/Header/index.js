import React, { Component } from 'react';
import Link from 'gatsby-link';
import './header.scss';

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 5px',
  display: 'flex',
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isDetailOpen: false,
    };
  }

    handleBtnClick = () => {
      this.setState(prevState => ({
        isDetailOpen: !prevState.isDetailOpen,
      }));
    };

    render() {
      return (
        <div className="header">
          <div
            style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 auto',
            maxWidth: 960,
          }}
          >
            <h1 className="flex-50">
              <Link href="/" to="/" style={linkStyle}>
                <img
                  style={{ marginBottom: 0 }}
                  alt="logo"
                  height="80"
                  src="https://dl.dropbox.com/s/7ucsv1m2jhpj68l/128x128_white.png"
                />
              </Link>
            </h1>
            <div className="flex flex-100"
              style={{
              justifyContent: 'space-between',
                  alignItems: 'center',
            }}
            >
              <Link href="/about-us" to="/about-us" style={linkStyle}>
              About Us
              </Link>
              <Link href="/advisor" to="/advisor" style={linkStyle}>
              Advisor
              </Link>
              <Link href="/clients" to="/clients" style={linkStyle}>
              Clients
              </Link>
              <Link href="/our-skills" to="/our-skills" style={linkStyle}>
              Our Skills
              </Link>
              <Link href="/blog" to="/blog" style={linkStyle}>
              Blog
              </Link>
              <Link className="btn" href="/contact" to="/contact" style={linkStyle}>
              Contact Us
              </Link>
            </div>
          </div>
          <div
            style={{
            margin: '0 auto',
            maxWidth: 960,
          }}
          >
            <h1>We engineer your data journey</h1>
            <button className="btn" onClick={this.handleBtnClick}>Read {this.state.isDetailOpen ? 'Less' : 'More' }</button>
            {this.state.isDetailOpen && (
            <ul>
              <li>
                  Operationalize your emerging technology journey with Data Peace
              </li>
              <li>
                Our two verticals are focused on PREPARING and DELIVERING the
                promise of Emerging Technologies for your business.
              </li>
              <li>Cloud Enablement Services help you PREPARE</li>
              <li>AI as a Service helps you DELIVER.</li>
            </ul>)
            }
          </div>
        </div>
      );
    }
}

export default Header;
