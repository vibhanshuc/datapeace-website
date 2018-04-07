import React, { Component } from 'react';
import FaChevronRight from 'react-icons/lib/fa/chevron-circle-right';
import Menu from './Menu';
import headerImage from './hero_image1.png';
import './header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isDetailOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const sticky = this.menu.offsetTop + this.menu.clientHeight;
      if (window.pageYOffset > sticky) {
        this.menu.classList.add('fixed');
      } else {
        this.menu.classList.remove('fixed');
      }
    });
  }

  handleMenuItemClick = (id) => {
    const ele = document.getElementById(id);
    if (ele) {
      ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  handleBtnClick = () => {
    this.setState(prevState => ({
      isDetailOpen: !prevState.isDetailOpen,
    }));
  };

  render() {
    return (
      <div
        className="header"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div
          ref={node => (this.menu = node)}
          className="sticky"
        >
          <Menu onMenuItemClick={this.handleMenuItemClick} />
        </div>
        <div className="header-heading">
          <h1>We engineer your data journey</h1>
          <button className="btn" onClick={this.handleBtnClick}>
            Read {this.state.isDetailOpen ? 'Less' : 'More'}
          </button>
          {this.state.isDetailOpen && (
            <ul>
              <li>
                <span><FaChevronRight /></span>
                <span>
                Operationalize your emerging technology journey with Data Peace
                </span>
              </li>
              <li>
                <span><FaChevronRight /></span>
                <span>
                    Our two verticals are focused on PREPARING and DELIVERING the
                promise of Emerging Technologies for your business.
                </span>
              </li>
              <li>
                <span><FaChevronRight /></span>
                <span>
                  Cloud Enablement Services help you PREPARE
                </span>
              </li>
              <li>
                <span><FaChevronRight /></span>
                <span>
                  AI as a Service helps you DELIVER.
                </span>
              </li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
