import React from 'react';
import Helmet from 'react-helmet';

import Scholarship from '../../components/Scholarship/Scholarship';
import config from '../../../data/SiteConfig';

const ScholarshipPage = () => (
  <div>
    <Helmet>
      <title>{`Scholarship | ${config.siteTitle}`}</title>
      <link rel="canonical" href={`${config.siteUrl}/journey-to-achieve/scholarship`} />
    </Helmet>
    <Scholarship />
  </div>
);

export default ScholarshipPage;
