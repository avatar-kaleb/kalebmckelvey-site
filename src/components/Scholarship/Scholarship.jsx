import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import "./Scholarship.scss";

class Scholarship extends Component {
  render() {
    return (
      <div className="scholarship-wrapper md-grid mobile-fix">
        <Card raise className="md-cell md-cell--7 md-cell--10-tablet">
          {/* <Media aspectRatio="4-3">
            <img
              src={kalebWelcomeImage}
              alt="A white male with a black tuxedo on in a nature setting."
            />
          </Media> */}
          <CardText>
            <h1>The Journey to Achieve Scholarship</h1>
            <p>
              Since 2015, every year the Nu Lambda chapter of Kappa Alpha Psi
              Fraternity Inc. supports a senior Strasburg High School on their
              journey to achieve. We look for desire, determination, and
              integrity because we believe these are the traits that make an
              achiever successful in their journey.
            </p>
            <hr />
            Looking to Apply? Download the application here:{" "}
            <a href="https://www.kalebmckelvey.xyz/wp-content/uploads/2018/02/The-Journey-to-Achieve-Scholarship.doc">
              The Journey to Achieve Scholarship Application
            </a>
            <hr />
            <p>
              We are planning to raise a total of <strong>$500</strong> for our
              scholarship by April 15, 2018. Please help us help a graduating
              senior on their journey to achieve below!
            </p>
            <p>
              {" "}
              Please let me know if you have any questions:
              KalebMcKelvey3@gmail.com.
              <h1>// !TODO -- add link or paypal form</h1>
            </p>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Scholarship;
