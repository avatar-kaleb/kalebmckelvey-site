import React from 'react';
import Helmet from 'react-helmet';

import AboutTheJourney from '../../components/AboutTheJourney/AboutTheJourney';
import config from '../../../data/SiteConfig';

const AboutTheJourneyPage = () => (
  <div>
    <Helmet>
      <title>{`Journey To Achieve | ${config.siteTitle}`}</title>
      <link rel="canonical" href={`${config.siteUrl}/journey-to-achieve/about-the-journey`} />
    </Helmet>
    <AboutTheJourney />
  </div>
);

export default AboutTheJourneyPage;
