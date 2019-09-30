import React, { Component } from 'react';
import { navigate } from 'gatsby-link';
import { node, string } from 'prop-types';
import Menu from './Menu';
import Sidenav from './Sidenav/Sidenav';
import headerImage from './header.png';
import './header.scss';

class Header extends Component {
  static propTypes = {
    img: string,
    children: node.isRequired,
  };

  static defaultProps = {
    img: undefined,
  };

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

  scrollToDiv = id => {
    const ele = document.getElementById(id);
    if (ele) {
      ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  openSidebar = () => {
    this.sideNav.root.style.width = '300px';
    this.sideNav.root.classList.add('open');
  };

  handleMenuItemClick = id => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        this.scrollToDiv(id);
      }, 200);
    } else {
      this.scrollToDiv(id);
    }
  };

  render() {
    const { img, children } = this.props;
    return (
      <div
        className="header"
        style={{
          backgroundImage: img
            ? `url(${img}), linear-gradient(#eb01a5, #d13531)`
            : `url(${headerImage}), linear-gradient(#eb01a5, #d13531)`,
        }}
      >
        <Menu
          onMenuItemClick={this.handleMenuItemClick}
          onTriggerClick={this.openSidebar}
        />
        <Sidenav
          ref={ref => {
            this.sideNav = ref;
          }}
          onMenuItemClick={this.handleMenuItemClick}
        />
        {children}
      </div>
    );
  }
}

export default Header;
