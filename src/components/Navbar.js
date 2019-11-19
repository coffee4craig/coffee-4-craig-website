import React from 'react';

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import logo from '../img/logo.png';
import CloseIcon from '../img/icons/close-icon.svg';
import MenuIcon from '../img/icons/menu-icon.svg';

class Navbar extends React.Component {
  state = {
    navbarBackground: false, 
    isMobile: false,   
    isOpen: false, 
  }

  targetRef = React.createRef();
  targetElement = null;

  componentDidMount() {
    this.handleResize();
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.targetElement = this.targetRef.current; 
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    clearAllBodyScrollLocks();
  }

  handleScroll = () => {
    if (window.scrollY > 5) {
      this.setState({
        navbarBackground: true,
      })
    } else {
      this.setState({
        navbarBackground: false,
      })
    }
  };

  handleResize = () => {
    if (window.innerWidth > 961 ) {
      this.setState({
        isMobile: false,
        isOpen: false
      })
    } else {
      this.setState({
        isMobile: true
      })
    }
  }

  toggleMenu = () => {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen
    })
  }

  render() {
    const { navbarBackground, isMobile, isOpen } = this.state;

    const transform = isOpen ? `translateX(0%)` : `translateX(100%)`;
    const bgColor = navbarBackground ? `#FFFFFF` : `transparent`;

    if (isOpen) {
      disableBodyScroll(this.targetElement);
    } else {
      enableBodyScroll(this.targetElement);
    }

    return (
      <nav
        className={`navbar`}
        style={{
          'backgroundColor': bgColor
         }}
        role="navigation"
        aria-label="main-navigation"
      >
      <div className="navbar__wrapper">
        <div className="navbar__flex">
          <span className="navbar__logo">
            <img src={logo} alt="Coffee 4 Craig Logo" />
          </span>
        </div>
        
        
        <div ref={this.targetRef} className={`navbar__flex navbar__menu ${isMobile ? `is-mobile` : ``}`} style={{ 'transform': isMobile ? transform : 'translateX(0%)'}}>
          <ul className="navbar__links">
              <li>
                <a href="http://google.com">About Us</a>
              </li>
              <li>
                <a href="http://google.com">Support Us</a>
              </li>
              <li>
                <a href="http://google.com">Fundraise</a>
              </li>
              <li>
                <a href="http://google.com">Get in touch</a>
              </li>
            </ul>
          </div>
          <div className="navbar__flex">
            <button className="btn btn--style-b" type="button">Donate Now</button>
            {
              isMobile && 
                <button className="btn" type="button" onClick={this.toggleMenu}>{ isOpen ? <CloseIcon/> : <MenuIcon/>}</button>
            }
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
