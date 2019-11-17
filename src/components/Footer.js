import React from 'react';

import HeartIcon from '../img/icons/heart.svg';
import DonateIcon from '../img/icons/donate.svg';
import BalloonIcon from '../img/icons/balloon.svg';
import EnvelopeIcon from '../img/icons/envelope.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cta-block">
        <div className="footer__cta-row">
          <div className="footer__cta-col">
            <div className="footer__cta-card">
              <DonateIcon />
              <h3 className="footer__cta-title">Donate</h3>
              <p className="footer__cta-subtitle">Volunteer - Fundraise - Raise Awareness - Share - Smile</p>
            </div>
          </div>
          <div className="footer__cta-col">
            <div className="footer__cta-card">
              <HeartIcon />
              <h3 className="footer__cta-title">Support</h3>
              <p className="footer__cta-subtitle">Volunteer - Fundraise - Raise Awareness - Share - Smile</p>
            </div>
          </div>
          <div className="footer__cta-col">
            <div className="footer__cta-card">
              <BalloonIcon />
              <h3 className="footer__cta-title">Fundraise</h3>
              <p className="footer__cta-subtitle">Volunteer - Fundraise - Raise Awareness - Share - Smile</p>
            </div>
          </div>
          <div className="footer__cta-col">
            <div className="footer__cta-card">
              <EnvelopeIcon />
              <h3 className="footer__cta-title">Contact Us</h3>
              <p className="footer__cta-subtitle">Volunteer - Fundraise - Raise Awareness - Share - Smile</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__main">
        <div className="footer__wrapper">
        
          <div className="footer__column">
                <img className="footer__image" src="https://via.placeholder.com/115"></img>
                <p className="footer__copyright">Copyright Coffee4Craig 2019</p>
          </div>

          <div className="footer__column">
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
            <h5 className="footer__title">Terms and conditions</h5>
            <ul className="footer__list">
              <li>
                <a  href="www.google.com" className="footer__list_item">Disclaimer</a>
              </li>
              <li>
                <a  href="www.google.com" className="footer__list_item">Privacy</a>
              </li>
              <li>
                <a  href="www.google.com" className="footer__list_item">Cookies</a>
              </li>
              <li>
                <a  href="www.google.com" className="footer__list_item">Accessibility</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <ul className="footer__list_social">
              <li>
              <a href="https://stackoverflow.blog?blb=1" className="footer__list_social_button"> Follow </a>
              </li>
              <li >
                <a href="https://stackoverflow.blog?blb=1" className="footer__list_social_button">Like </a>
              </li>
              <li > 
                <a href="https://stackoverflow.blog?blb=1" className="footer__list_social_button">Follow </a>
              </li>
            </ul>           
          </div>
        </div>   
      </div>
    </footer>
  )
}

export default Footer
