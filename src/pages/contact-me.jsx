import React from 'react';
import Helmet from 'react-helmet';

import ContactMe from '../components/ContactMe/ContactMe';
import config from '../../data/SiteConfig';

const ContactMePage = () => (
  <div className="about-container">
    <Helmet>
      <title>{`Contact Me | ${config.siteTitle}`}</title>
      <link rel="canonical" href={`${config.siteUrl}/contact-me/`} />
    </Helmet>
    <ContactMe />
  </div>
);

export default ContactMePage;
