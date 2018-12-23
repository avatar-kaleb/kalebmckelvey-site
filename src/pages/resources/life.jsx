import React from 'react';
import Helmet from 'react-helmet';

import LifeResources from '../../components/LifeResources/LifeResources';
import config from '../../../data/SiteConfig';

const LifeResourcesPage = () => (
  <div>
    <Helmet>
      <title>{`Life Resources | ${config.siteTitle}`}</title>
      <link rel="canonical" href={`${config.siteUrl}/resources/life/`} />
    </Helmet>
    <LifeResources />
  </div>
);

export default LifeResourcesPage;
