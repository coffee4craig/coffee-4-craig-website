import React from 'react';

class ContactForm extends React.Component {
  state = {
    fullName: "",
    emailAddress: "",
    message: "",
  }

  handleinputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
        [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.fullName} ${this.state.emailAddress}!`)
  }

  render() {
    return (
      <div className="contact-form">
        <div className="contact-form__wrapper">
          <h3>Speak with our support team</h3>
          <form>
            <div className="contact-form__wrapper-label">
              <label>
                Full name
                <input type="text"
                name="fullName" 
                value={this.state.fullName}
                onChange={this.handleinputChange}
                />
              </label>
              <label>
                Email Address
                <input type="text" 
                name="emailAddress" 
                value={this.state.emailAddress}
                onChange={this.handleinputChange}
                />
              </label>
            </div>
            <div className="contact-form__wrapper-label-message">
            <label>
                Message
                <input type="text" 
                name="message" 
                value={this.state.message}
                onChange={this.handleinputChange}
                />
              </label>
            </div>
            <button className="btn btn--style-b" type="submit">Submit</button>
            <p>We’ll aim to get back to you within 48 hrs</p>
          </form>
        </div>
      </div>
    )
  }
}
    
  

// const ContactForm = () => (
//   <div className="contact-form">
//     <div className="contact-form__wrapper">
//     <h2 className="contact-form__text">Speak with our support team</h2>
//     </div>
//   </div>
// );

export default ContactForm;