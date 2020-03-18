import React, { Fragment } from "react";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends React.Component {
  state = {
    fields: {
      fullName: "",
      emailAddress: "",
      message: ""
    },
    submitted: false,
    sending: false
  };

  handleInputChange = e => {
    e.persist();
    this.setState(state => ({
      fields: {
        ...state.fields,
        [e.nativeEvent.target.name]: e.nativeEvent.target.value
      }
    }));
  };

  checkEmpty = () => {
    const notEmpty = Object.values(this.state.fields).filter(
      field => field !== ""
    );

    if (notEmpty.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.checkEmpty()) {
      this.setState({ sending: true });
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => this.setState({ submitted: true, sending: false }))
        .catch(error => alert(error));
    }
  };

  render() {
    const { sending, submitted } = this.state;

    return (
      <div className="contact-form">
        <div className="contact-form__wrapper">
          {submitted ? (
            <Fragment>
              <h2 className="contact-form__title">Thank you</h2>
              <p>
                Your message has been sent. We'll aim to get back to you within
                48 hours.
              </p>
            </Fragment>
          ) : (
            <Fragment>
              <h2 className="contact-form__title">
                Speak with our support team
              </h2>
              <form
                className="contact-form__form"
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={this.handleFormSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="contact-form__form-group">
                  <label>
                    Full name
                    <input
                      type="text"
                      name="fullName"
                      onChange={this.handleInputChange}
                      value={this.state.fields.fullName}
                    />
                  </label>
                  <label>
                    Email Address
                    <input
                      type="email"
                      name="emailAddress"
                      onChange={this.handleInputChange}
                      value={this.state.fields.emailAddress}
                    />
                  </label>
                </div>
                <div className="contact-form__form-group">
                  <label>
                    Message
                    <textarea
                      rows="5"
                      name="message"
                      onChange={this.handleInputChange}
                      value={this.state.fields.message}
                    />
                  </label>
                </div>
                <div className="contact-form__form-group">
                  <button
                    className="btn btn--style-b"
                    type="submit"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Submit Message"}
                  </button>
                </div>
                <div className="contact-form__form-group">
                  <p
                    style={{ textAlign: "center" }}
                    className="contact-form__form-group__submition-text"
                  >
                    We’ll aim to get back to you within 48 hrs
                  </p>
                </div>
              </form>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default ContactForm;
