import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Media from 'react-md/lib/Media/Media';

import universityImage from '../../images/university-picture-for-scholarship-page.jpeg';
import './Scholarship.scss';

/**
 * Scholarship pae wrapper
 */
const Scholarship = () => (
  <div className="scholarship wrapper-flex-column--center md-grid mobile-fix">
    <Card className="md-cell md-cell--8 md-cell--10-tablet">
      <Media aspectRatio="4-3">
        <img
          className="animated pulse scholarship-img--border"
          src={universityImage}
          alt="A university building depicting college."
        />
      </Media>
      <CardText className="animated zoomInUp cardText-text">
        <h1>The Journey to Achieve Scholarship</h1>
        <p>
          Since 2015, every year the Nu Lambda chapter of Kappa Alpha Psi Fraternity Inc. supports a senior Strasburg
          High School on their journey to achieve. We look for desire, determination, and integrity because we believe
          these are the traits that make an achiever successful in their journey.
        </p>
        <hr />
        Looking to Apply? Download the application here: &nbsp;
        <a target="_blank" rel="noopener noreferrer" href="https://1drv.ms/w/s!AlG7su8ac95HgrInml3ZswFVy4Y9ng">
          The Journey to Achieve Scholarship Application
        </a>
        <hr />
        <p>
          We are planning to raise a total of &nbsp;
          <strong>$500</strong>
          &nbsp; for our scholarship by April 15, 2019. Please help us help a graduating senior on their journey to
          achieve below!
        </p>
        <p>
          If you are interested in donating, please head to &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://paypal.com">
            PayPal
          </a>
          &nbsp; and send your donation to NuLambdaNupes@gmail.com!
        </p>
        <p>
          <em>I will be upgrading this process so you can donate right here on the site in the future!</em>
        </p>
        <p>Please let me know if you have any questions: KalebMcKelvey3@gmail.com.</p>
      </CardText>
    </Card>
  </div>
);

export default Scholarship;
