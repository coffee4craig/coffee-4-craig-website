import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (


      <footer className="footer">
        <div class="footer__wrapper">
        
          <div class="footer__column">
                <img class="footer__image" src="https://via.placeholder.com/115"></img>
                <p class="footer__copyright">Copyright Coffee4Craig 2019</p>
          </div>

          <div class="footer__column">
            <h5 class="footer__title">Registered Offices</h5>
            <p class="footer__text">
                53 King Street <br/>
                Manchester <br/>
                M4 2LQ <br/>
            </p>
            <h5 class="footer__title">Registered Charity</h5>
            <p class="footer__text">
                No. 115674
            </p>            
          </div>
  
          <div class="footer__column">
            <h5 class="footer__title">Terms and conditions</h5>
            <ul class="footer__list">
              <li>
                <a  href="www.google.com" class="footer__list_item">Disclaimar</a>
              </li>
              <li>
                <a  href="www.google.com" class="footer__list_item">Privacy</a>
              </li>
              <li>
                <a  href="www.google.com" class="footer__list_item">Cookies</a>
              </li>
              <li>
                <a  href="www.google.com" class="footer__list_item">Accessibility</a>
              </li>
            </ul>
          </div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div class="footer__column">
            <ul class="footer__list_social">
              <li>
              <a href="https://stackoverflow.blog?blb=1" class="footer__list_social_button social_twitter"><i class="fa fa-twitter"></i> Follow </a>
              </li>
              <li >
                <a href="https://stackoverflow.blog?blb=1" class="footer__list_social_button social_facebook"><i class="fa fa-facebook-f"></i> Like </a>
              </li>
              <li > 
                <a href="https://stackoverflow.blog?blb=1" class="footer__list_social_button social_instagram"><i class="fa fa-instagram"></i> Follow </a>
              </li>
            </ul>           
          </div>

        </div>   
      </footer>
    )
  }
}

export default Footer
