import React, { Component } from 'react';
import Menu from './Menu';
import headerImage from './Banner.jpg';
import './header.scss';

class Header extends Component {
  componentDidMount() {
    // window.addEventListener('scroll', () => {
    //   const sticky = this.menu.offsetTop + this.menu.clientHeight;
    //   if (window.pageYOffset > sticky) {
    //     this.menu.classList.add('fixed');
    //   } else {
    //     this.menu.classList.remove('fixed');
    //   }
    // });
  }

  handleMenuItemClick = (id) => {
    const ele = document.getElementById(id);
    if (ele) {
      ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  render() {
    return (
      <div
        className="header"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <Menu onMenuItemClick={this.handleMenuItemClick} />
        <div className="header-heading">
          <h1>We engineer</h1>
          <h1>your data journey</h1>
        </div>
      </div>
    );
  }
}

export default Header;
