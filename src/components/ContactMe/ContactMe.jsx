import React, { Component } from "react";
import Media from "react-md/lib/Media/Media";
import Paper from "react-md/lib/Papers/Paper";
import SignupForm from "../SignupForm/SignupForm";
import headShotImage from "../../../src/images/Contact-Headshot.jpg";
import "./ContactMe.scss";

class ContactMe extends Component {
  render() {
    return (
      <div className="contactMe-container md-grid mobile-fix">
        <Paper
          className="md-cell md-cell--12 md-grid contactMe-paper--white"
          raiseOnHover
          zDepth={0}
        >
          <section className="md-cell md-cell--middle md-cell--4-desktop md-cell--3-tablet ">
            <Media aspectRatio="1-1">
              <img
                className="contactMe-img animated fadeInLeft"
                src={headShotImage}
                alt="Male smiling with a red shirt."
              />
            </Media>
          </section>
          <section className="md-cell md-cell--center md-cell--middle md-cell--1-desktop-offset md-cell--1-tablet-offset md-cell--6-desktop md-cell--3-tablet">
            <div className="animated fadeInDown">
              <h2>I would love to hear from you!</h2>
              <p>
                Want to connect, have a question, or suggestion? I always enjoy
                hearing from people who have stopped by the site!{" "}
              </p>
              <p>
                Send over an e-mail at:{" "}
                <a href="mailto:kalebmckelvey3@gmail.com">
                  KalebMcKelvey3@gmail.com
                </a>!
              </p>
              <p>Looking forward to hearing from you - best wishes!</p>
            </div>
            <div className="hide-on-mobile">
              <br /> <hr /> <br />
              <SignupForm />
            </div>
          </section>
        </Paper>
      </div>
    );
  }
}

export default ContactMe;
