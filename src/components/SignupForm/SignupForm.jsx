import React, { Component } from "react";
import Button from "react-md/lib/Buttons/Button";
import Grid from "react-md/lib/Grids/Grid";
import Cell from "react-md/lib/Grids/Cell";
import TextField from "react-md/lib/TextFields/TextField";
import addToMailchimp from "gatsby-plugin-mailchimp";
import debounce from "lodash/debounce";
import "./SignupForm.scss";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ``,
      lastName: "",
      email: "",
      status: "",
      msg: ""
    };
  }

  _handleFirstNameChange = debounce(e => {
    this.setState({ firstName: e });
  }, 500);

  _handleLastNameChange = debounce(e => {
    this.setState({ lastName: e });
  }, 500);

  _handleEmailChange = debounce(e => {
    this.setState({ email: e });
  }, 500);

  // taken from Gatsby Mail Form repo
  _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== `success`) {
          this.setState({
            status: `error`,
            msg: result.msg
          });
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: `success`,
            msg: result.msg
          });
        }
      })
      .catch(err => {
        // Network failures, timeouts, etc
        this.setState({
          status: `error`,
          msg: err
        });
      });
  };

  _handleFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    this.setState(
      {
        status: `sending`,
        msg: null
      },
      // setState callback (subscribe email to MC)
      this._postEmailToMailchimp(this.state.email, {
        FNAME: this.state.firstName,
        LNAME: this.state.lastName
      })
    );
  };

  render() {
    return (
      <div className="signupForm-wrapper">
        {this.state.status === "success" ? (
          <p className="signUpForm-text--secondary">
            Success! Thank you for signing up!
          </p>
        ) : (
          <div className="animated fadeInRight">
            <p className="signupForm-p--mb">
              Want to stay updated on new posts? Subscribe below!
            </p>
            <br />
            <form id="email-capture" method="post">
              <Grid className="signupForm-form--border">
                <Cell size={4}>
                  <TextField
                    id="floating-center-title"
                    label="First Name"
                    lineDirection="center"
                    placeholder="George"
                    required
                    onChange={this._handleFirstNameChange}
                  />
                </Cell>
                <Cell size={4}>
                  <TextField
                    id="floating-center-title"
                    label="Last Name"
                    lineDirection="center"
                    placeholder="Castanza"
                    onChange={this._handleLastNameChange}
                    required
                  />
                </Cell>
                <Cell size={4}>
                  <TextField
                    id="floating-center-title"
                    label="Email Address"
                    lineDirection="center"
                    placeholder="George@test.com"
                    onChange={this._handleEmailChange}
                    required
                  />
                </Cell>
                <Cell size={12} position="right">
                  <Button
                    className="signupForm--button--mt"
                    raised
                    secondary
                    onClick={this._handleFormSubmit}
                  >
                    Subscribe!
                  </Button>
                </Cell>
              </Grid>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default SignupForm;
