import React from 'react';
import Helmet from 'react-helmet';

import Services from '../../components/Services/Services';
import config from '../../../data/SiteConfig';

const ServicesPage = () => (
  <div>
    <Helmet>
      <title>{`Services | ${config.siteTitle}`}</title>
      <link rel="canonical" href={`${config.siteUrl}/professional/services/`} />
    </Helmet>
    <Services />
  </div>
);

export default ServicesPage;
