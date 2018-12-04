import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import Menu from './Menu';
import Sidenav from './Sidenav/Sidenav';
import headerImage from './header.png';
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

  scrollToDiv = (id) => {
    const ele = document.getElementById(id);
    if (ele) {
      ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  openSidebar = () => {
    this.sideNav.root.style.width = '300px';
    this.sideNav.root.classList.add('open');
  };

  handleMenuItemClick = (id) => {
    if (window.location.pathname !== '/') {
      navigateTo('/');
      setTimeout(() => {
        this.scrollToDiv(id);
      }, 200);
    } else {
      this.scrollToDiv(id);
    }
  };

  render() {
    return (
      <div
        className="header"
        style={{ backgroundImage: this.props.img ? `url(${this.props.img}), linear-gradient(#eb01a5, #d13531)` : `url(${headerImage}` }}
      >
        <Menu onMenuItemClick={this.handleMenuItemClick} onTriggerClick={this.openSidebar} />
        <Sidenav ref={node => this.sideNav = node} onMenuItemClick={this.handleMenuItemClick} />
        {this.props.children}
      </div>
    );
  }
}

export default Header;
