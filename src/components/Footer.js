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
              <li class="footer__list_item">Disclaimar</li>
              <li class="footer__list_item">Privacy</li>
              <li class="footer__list_item">Cookies</li>
              <li class="footer__list_item">Accessibility</li>
            </ul>
          </div>

          <div class="footer__column">
            <ul class="footer__list_social">
              <li class="footer__list_social_item social_twitter">
                <a href="https://stackoverflow.blog?blb=1">Follow</a>
              </li>
              <li class="footer__list_social_item social_facebook">
                <a href="https://stackoverflow.blog?blb=1">Like </a>
              </li>
              <li class="footer__list_social_item social_instagram">
                <a href="https://stackoverflow.blog?blb=1">Follow </a>
              </li>
            </ul>           
          </div>

        </div>   
      </footer>
    )
  }
}

export default Footer
