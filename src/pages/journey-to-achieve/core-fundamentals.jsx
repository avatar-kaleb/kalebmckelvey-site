import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../data/SiteConfig';
import CoreFundamentals from '../../components/CoreFundamentals/CoreFundamentals';

const CoreFundamentalsPage = () => (
  <div>
    <Helmet>
      <title>{`Journey To Achieve | ${config.siteTitle}`}</title>
      <link rel="canonical" href={`${config.siteUrl}/journey-to-achieve/about-the-journey`} />
    </Helmet>
    <CoreFundamentals />
  </div>
);

export default CoreFundamentalsPage;
