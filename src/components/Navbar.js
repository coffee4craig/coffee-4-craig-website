import React from 'react'

import logo from '../img/logo.png'
import CloseIcon from '../img/icons/close-icon.svg'
import MenuIcon from '../img/icons/menu-icon.svg'

class Navbar extends React.Component {
  state = {
    navbarBackground: 'transparent', 
    showMobile: false,   
    showMenu: false, 
  }

  componentDidMount() {
    this.handleResize();
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  handleScroll = () => {
    if (window.scrollY > 5) {
      this.setState({
        navbarBackground: '#ffffff',
      })
    } else {
      this.setState({
        navbarBackground: 'transparent',
      })
    }
  };

  handleResize = () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 961 ) {
      this.setState({
        showMobile: false,
        showMenu: false
      })
    } else {
      this.setState({
        showMobile: true
      })
    }
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const { navbarBackground, showMobile, showMenu } = this.state;

    return (
      <nav
        className={`navbar`}
        style={{
          'background-color': navbarBackground
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
        
        
        <div className={`navbar__flex navbar__menu ${showMobile ? `is-mobile` : ``} ${showMenu ? `is-open` : ``}`}>
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
            {
            showMobile && 
              <button className="btn" type="button" onClick={this.toggleMenu}><CloseIcon/></button>
            }
          </div>
          <div className="navbar__flex">
            <button className="btn btn--style-b" type="button">Donate Now</button>
            {
              showMobile && 
                <button className="btn" type="button" onClick={this.toggleMenu}><MenuIcon/></button>
            }
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
