import React from 'react';

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import logo from '../img/nav_logo.svg';
import CloseIcon from '../img/icons/close-icon.svg';
import MenuIcon from '../img/icons/menu-icon.svg';
import { Link } from 'gatsby';
import MenuCta from '../components/MenuCta'; 

class Navbar extends React.Component {
  state = {
    navbarBackground: false, 
    isMobile: false,   
    isOpen: false, 
    pathname: "",
  }

  targetRef = React.createRef();
  targetElement = null;

  componentDidMount() {
    this.handleResize();
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.targetElement = this.targetRef.current; 
    const { pathname } = window.location;
    this.setState({pathname: pathname});

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    clearAllBodyScrollLocks();
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
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

  toggleMenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen
    })
  }



  render() {
    const { navbarBackground, isMobile, isOpen } = this.state;

    const transform = isOpen ? `translateX(0%)` : `translateX(100%)`;
    const bgColor = navbarBackground ? `#FFFFFF` : `transparent`;
    const cta = {
      label: "Donate Now!",
      url: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VBW25QGTWEMYC&source=url"
    };
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
            <Link className="navbar__logo" to="/">
              <img src={logo} alt="Coffee 4 Craig Logo" />
            </Link>
          </div>
          
          
          <div ref={this.targetRef} className={`navbar__flex navbar__menu ${isMobile ? `is-mobile` : ``}`} style={{ 'transform': isMobile ? transform : 'translateX(0%)'}}>
            <ul className="navbar__links">
                <li className={this.state.pathname === "/about-us" ? "nav-link-active" : null}>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className={this.state.pathname === "/support-us" ? "nav-link-active" : null}>
                  <Link to="/support-us">Support Us</Link>
                </li>
                <li className={this.state.pathname === "/fundraising" ? "nav-link-active" : null}>
                  <Link to="/fundraising">Fundraising</Link>
                </li>
                <li className={this.state.pathname === "/contact-us" ? "nav-link-active" : null}>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
              {isMobile && <MenuCta {...cta}></MenuCta>}
            </div>
            <div className="navbar__flex">

            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VBW25QGTWEMYC&source=url" className="btn btn--paypal" type="button"><em>Donate Now</em></a>
            {
              isMobile && 
                <a href="#" className="btn" type="button" onClick={this.toggleMenu}>{ isOpen ? <CloseIcon/> : <MenuIcon/>}</a>
            }
            </div>
          </div>
        </nav>
      )   
  }
}

export default Navbar
