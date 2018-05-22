import React, { Component } from 'react';
import FaClose from 'react-icons/lib/fa/close';
import Link from 'gatsby-link';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import logo from '../logo.png';
import './sidenav.scss';

class Sidenav extends Component {
  closeNav = () => {
    this.root.style.width = '0';
    this.root.classList.remove('open');
  };
  render() {
    const { onMenuItemClick } = this.props;
    return (
      <div
        ref={(root) => {
          this.root = root;
        }}
        className="sidenav"
      >
        <Link href="/" to="/">
          <img
            alt="logo"
            height="80"
            src={logo}
          />
        </Link>
        <FaClose
          size={36}
          className="closebtn"
          onClick={this.closeNav}
        />
        <div className="flex flex-col sidenav-wrapper">
          <div className="flex flex-col sidenav-menus">
            <div>
              <button onClick={() => onMenuItemClick('services')}>Our services</button>
            </div>
            <div>
              <button onClick={() => onMenuItemClick('about')}>About us</button>
            </div>
            <div>
              <Link href="/careers" to="/careers">Careers</Link>
            </div>
            <div>
              <Link href="/blog" to="/blog">Blog</Link>
            </div>
          </div>
          <div className="flex flex-col flex-center">
            <button onClick={() => onMenuItemClick('contact')} className="btn">Contact Us</button>
            <div className="Contact-social flex flex-center">
              <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/datapeaceai">
                <FaFacebook />
              </a>
              <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/datapeaceai">
                <FaTwitter />
              </a>
              <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/13704845/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidenav;
