import React from 'react';
import Helmet from 'react-helmet';

import Observations from '../../components/Observations/Observations';
import config from '../../../data/SiteConfig';

const ObservationsPage = () => (
  <div>
    <Helmet>
      <title>{`Observations | ${config.siteTitle}`}</title>
      <link rel="canonical" href={`${config.siteUrl}/journey-to-achieve/observations/`} />
    </Helmet>
    <Observations />
  </div>
  );

export default ObservationsPage;
