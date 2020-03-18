import React from 'react';
import { Link } from 'gatsby';

import HeartIcon from '../img/icons/heart.svg';
import DonateIcon from '../img/icons/donate.svg';
import BalloonIcon from '../img/icons/balloon.svg';
import EnvelopeIcon from '../img/icons/envelope.svg';
import LivingWageLogo from '../img/LW_logo_employer_rgb.svg';

import LogoTwitter from '../img/icons/twitter.svg';
import LogoFacebook from '../img/icons/facebook.svg';
import LogoInstagram from '../img/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cta-block">
        <div className="footer__cta-row">
          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VBW25QGTWEMYC&source=url" className="footer__cta-col" target="_blank">
            <div className="footer__cta-card">
              <DonateIcon />
              <h3 className="footer__cta-title">Donate</h3>
              <p className="footer__cta-subtitle">Clothing - Toiletries - Food - Drink</p>
            </div>
          </a>
          <Link to="/support-us" className="footer__cta-col">
            <div className="footer__cta-card">
              <HeartIcon />
              <h3 className="footer__cta-title">Support</h3>
              <p className="footer__cta-subtitle">Volunteer - Fundraise - Raise Awareness - Share</p>
            </div>
          </Link>
          <Link to="/fundraising" className="footer__cta-col">
            <div className="footer__cta-card">
              <BalloonIcon />
              <h3 className="footer__cta-title">Fundraising</h3>
              <p className="footer__cta-subtitle">Virgin Giving - Donate Now - PayPal - Direct Bank Transfer</p>
            </div>
          </Link>
          <Link to="/contact-us" className="footer__cta-col">
            <div className="footer__cta-card">
              <EnvelopeIcon />
              <h3 className="footer__cta-title">Get in touch</h3>
              <p className="footer__cta-subtitle">Email - Phone - Social Media - Write to us</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="footer__main">
        <div className="footer__wrapper">
        
          <div className="footer__column">
            <img className="footer__image" src={LivingWageLogo} alt="We are a Living Wage employer"/>
            <p className="footer__copyright">&copy; 2020 Coffee4Craig</p>
          </div>

          <div className="footer__column footer__column--flex">
            <h5 className="footer__title">Registered Offices</h5>
            <p className="footer__text">
                53 King Street <br/>
                Manchester <br/>
                M4 2LQ <br/>
            </p>
            <h5 className="footer__title">Registered Charity</h5>
            <p className="footer__text">
                No. 115674
            </p>            
          </div>

          <div className="footer__column">
            <ul className="footer__list_social">
              <li>
                <a href="https://twitter.com/Coffee4Craig" className="footer__list_social_button social_twitter"><LogoTwitter /> <span>Twitter </span>@Coffee4Craig</a>
              </li>
              <li >
                <a href="https://www.facebook.com/Coffee4Craig/" className="footer__list_social_button social_facebook"><LogoFacebook />  <span>Facebook </span>Coffee4Craig</a>
              </li>
              <li > 
                <a href="https://www.instagram.com/coffee4craig/" className="footer__list_social_button social_instagram"><LogoInstagram /> <span>Instagram </span>@coffee4craig</a>
              </li>
            </ul>           
          </div>
        </div>   
      </div>
    </footer>
  )
}

export default Footer
