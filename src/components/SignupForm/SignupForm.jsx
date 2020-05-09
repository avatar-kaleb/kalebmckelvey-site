import addToMailchimp from 'gatsby-plugin-mailchimp';
import debounce from 'lodash/debounce';
import React, { useState } from 'react';
import { Snackbar } from 'react-md';
import Button from 'react-md/lib/Buttons/Button';
import Cell from 'react-md/lib/Grids/Cell';
import Grid from 'react-md/lib/Grids/Grid';
import TextField from 'react-md/lib/TextFields/TextField';
import ParticleEffectButton from 'react-particle-effect-button';
import { particleConfig } from '../../constants/config';
import './SignupForm.scss';

/**
 * Sign up form to subscribe users to mail chimp list
 */
const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [hidden, setHidden] = useState(false);
  const [toasts, setToasts] = useState([]);

  const _handleFirstNameChange = debounce((e) => {
    setFirstName(e);
  }, 500);

  const _handleLastNameChange = debounce((e) => {
    setLastName(e);
  }, 500);

  const _handleEmailChange = debounce((e) => {
    setEmail(e);
  }, 500);

  const _dismissToasts = () => {
    setToasts([]);
  };

  // taken from Gatsby Mail Form repo
  const _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then((result) => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== `success`) {
          setStatus('error');
          setHidden(false);
          setToasts([{ text: 'There was an error subscribing - please retry!' }]);
        } else {
          // Email address succesfully subcribed to Mailchimp
          setStatus('success');
        }
      })
      .catch(() => {
        // Network failures, timeouts, etc
        setStatus('error');
        setHidden(false);
        setToasts([{ text: 'There was an error subscribing - please retry!' }]);
      });
  };

  const _handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (email && firstName) {
      setStatus('sending');
      setHidden(true);
      _postEmailToMailchimp(email, {
        FNAME: firstName,
        LNAME: lastName
      });
    }
  };

  return (
    <div className="signup-form">
      <Snackbar id="example-snackbar" toasts={toasts} autohide onDismiss={_dismissToasts} />
      {status === 'success' ? (
        <p className="animated lightSpeedIn">
          Success! Thank you for joining - may the <em>achievement</em> force be with you!
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
                  onChange={_handleFirstNameChange}
                />
              </Cell>
              <Cell size={4}>
                <TextField
                  id="floating-center-title"
                  label="Last Name"
                  lineDirection="center"
                  placeholder="Castanza"
                  onChange={_handleLastNameChange}
                />
              </Cell>
              <Cell size={4}>
                <TextField
                  id="floating-center-title"
                  errorText="This field is required."
                  label="Email Address"
                  lineDirection="center"
                  placeholder="George@test.com"
                  onChange={_handleEmailChange}
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
                  <Button className="form-button--mt" raised primary onClick={_handleFormSubmit}>
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
};

export default SignupForm;
