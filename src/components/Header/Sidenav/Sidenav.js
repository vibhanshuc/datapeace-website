import React, { Component } from 'react';
import Link from 'gatsby-link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { func } from 'prop-types';
import logo from '../logo.png';
import './sidenav.scss';

class Sidenav extends Component {
  static propTypes = {
    onMenuItemClick: func.isRequired,
  };

  closeNav = () => {
    this.root.style.width = '0';
    this.root.classList.remove('open');
  };

  render() {
    const { onMenuItemClick } = this.props;
    return (
      <div
        ref={root => {
          this.root = root;
        }}
        className="sidenav"
      >
        <Link href="/" to="/" activeClassName="active">
          <img alt="logo" height="80" src={logo} />
        </Link>
        <MdClose size={36} className="closebtn" onClick={this.closeNav} />
        <div className="flex flex-col sidenav-wrapper">
          <div className="flex flex-col sidenav-menus">
            <div>
              <button
                type="button"
                className="Menu-item"
                onClick={() => onMenuItemClick('services')}
              >
                Our services
              </button>
            </div>
            <div>
              <button
                type="button"
                className="Menu-item"
                onClick={() => onMenuItemClick('about')}
              >
                About us
              </button>
            </div>
            <div>
              <Link
                className="Menu-item"
                href="/careers"
                to="/careers"
                activeClassName="active"
              >
                Careers
              </Link>
            </div>
            <div>
              <Link
                className="Menu-item"
                href="/blog"
                to="/blog"
                activeClassName="active"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="flex flex-col flex-center">
            <button
              type="button"
              onClick={() => onMenuItemClick('contact')}
              className="btn"
            >
              Contact Us
            </button>
            <div className="Contact-social flex flex-center">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/datapeaceai"
              >
                <FaFacebook />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/datapeaceai"
              >
                <FaTwitter />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/company/13704845/"
              >
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
