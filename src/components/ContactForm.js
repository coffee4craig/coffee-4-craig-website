import React from 'react';

class ContactForm extends React.Component {
  render() {
    return (
      <div className="contact-form">
        <div className="contact-form__wrapper">
          <h2 className="contact-form__title">Speak with our support team</h2>
          <form className="contact-form__form" name="contact" method="POST" data-netlify="true">
            <div className="contact-form__form-group">
              <label>
                Full name
                <input type="text"
                name="fullName" 
                />
              </label>
              <label>
                Email Address
                <input type="email" 
                name="emailAddress" 
                />
              </label>
            </div>
            <div className="contact-form__form-group">
              <label>
                Message
                <textarea rows="5" 
                name="message" 
                />
              </label>
            </div>
            <div className="contact-form__form-group">
              <button className="btn btn--style-b" type="submit">Submit Message</button>
            </div>
            <div className="contact-form__form-group">
              <p>We’ll aim to get back to you within 48 hrs</p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
    
export default ContactForm;