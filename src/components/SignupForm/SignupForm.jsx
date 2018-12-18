import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Button from 'react-md/lib/Buttons/Button';
import Cell from 'react-md/lib/Grids/Cell';
import debounce from 'lodash/debounce';
import Grid from 'react-md/lib/Grids/Grid';
import ParticleEffectButton from 'react-particle-effect-button';
import TextField from 'react-md/lib/TextFields/TextField';
import './SignupForm.scss';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ``,
      lastName: '',
      email: '',
      status: '',
      msg: '',
      hidden: false
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
        msg: null,
        hidden: true
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
        {this.state.status === 'success' ? (
          <p className="signUpForm-text--secondary">Success! Thank you for signing up!</p>
        ) : (
          <div className="animated fadeInRight">
            <p className="signupForm-p--mb">Want to stay updated on new posts? Subscribe below!</p>
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
                  <ParticleEffectButton
                    className="md-cell--right"
                    color="#ff6f00"
                    duration={300}
                    hidden={this.state.hidden}
                    oscillationCoefficient={30}
                    particlesAmountCoefficient={5}
                  >
                    <Button className="signupForm--button--mt" raised primary onClick={this._handleFormSubmit}>
                      Subscribe!
                    </Button>
                  </ParticleEffectButton>
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
