import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Button from 'react-md/lib/Buttons/Button';
import Cell from 'react-md/lib/Grids/Cell';
import debounce from 'lodash/debounce';
import Grid from 'react-md/lib/Grids/Grid';
import ParticleEffectButton from 'react-particle-effect-button';
import TextField from 'react-md/lib/TextFields/TextField';
import { Snackbar } from 'react-md';

import { particleConfig } from '../../constants/config';
import './SignupForm.scss';

/**
 * Sign up form to subscribe users to mail chimp list
 */
class SignupForm extends Component {
  _handleFirstNameChange = debounce(e => {
    this.setState({ firstName: e });
  }, 500);

  _handleLastNameChange = debounce(e => {
    this.setState({ lastName: e });
  }, 500);

  _handleEmailChange = debounce(e => {
    this.setState({ email: e });
  }, 500);

  constructor(props) {
    super(props);
    this.state = {
      firstName: ``,
      lastName: '',
      email: '',
      status: '',
      hidden: false,
      toasts: []
    };
  }

  _dismissToasts = () => {
    this.setState({ toasts: [] });
  };

  // taken from Gatsby Mail Form repo
  _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== `success`) {
          this.setState({
            status: `error`,
            hidden: false,
            toasts: [{ text: 'There was an error subscribing - please retry!' }]
          });
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: `success`
          });
        }
      })
      .catch(() => {
        // Network failures, timeouts, etc
        this.setState({
          status: `error`,
          hidden: false,
          toasts: [{ text: 'There was an error subscribing - please retry!' }]
        });
      });
  };

  _handleFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    const { email, firstName, lastName } = this.state;

    if (email && firstName) {
      this.setState(
        {
          status: `sending`,
          hidden: true
        },
        // setState callback (subscribe email to MC)
        this._postEmailToMailchimp(email, {
          FNAME: firstName,
          LNAME: lastName
        })
      );
    }
  };

  render() {
    const { hidden, status, toasts } = this.state;
    return (
      <div className="signup-form">
        <Snackbar id="example-snackbar" toasts={toasts} autohide onDismiss={this._dismissToasts} />
        {status === 'success' ? (
          <p className="animated lightSpeedIn">
            Success! Thank you for joining - may the
            {' '}
            <em>achievement</em>
            {' '}
force be with you!
          </p>
        ) : (
          <div className="animated fadeInRight">
            <p className="form-p--mb">Want to stay updated on new posts? Subscribe below!</p>
            <br />
            <form id="email-capture" method="post">
              <Grid className="form--border">
                <Cell size={4}>
                  <TextField
                    id="floating-center-title"
                    errorText="This field is required."
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
                  />
                </Cell>
                <Cell size={4}>
                  <TextField
                    id="floating-center-title"
                    errorText="This field is required."
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
                    color={particleConfig.color}
                    duration={particleConfig.duration}
                    hidden={hidden}
                    oscillationCoefficient={particleConfig.oscillationCoefficient}
                    particlesAmountCoefficient={particleConfig.particlesAmountCoefficient}
                  >
                    <Button className="form-button--mt" raised primary onClick={this._handleFormSubmit}>
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
