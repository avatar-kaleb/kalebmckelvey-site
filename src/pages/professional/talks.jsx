import React from 'react';
import Helmet from 'react-helmet';

import Talks from '../../components/Talks/Talks';
import config from '../../../data/SiteConfig';

const ServicesPage = () => (
  <div>
    <Helmet>
      <title>{`Services | ${config.siteTitle}`}</title>
      <link rel='canonical' href={`${config.siteUrl}/professional/talks/`} />
    </Helmet>
    <Talks />
  </div>
);

export default ServicesPage;
