import React from 'react';
import Helmet from 'react-helmet';

import NycBucketList from '../components/NycBucketList/NycBucketList';
import config from '../../data/SiteConfig';

const NewYorkBucketListPage = () => (
  <div className="nyc-bucketlist-container">
    <Helmet>
      <title>{`NYC Bucket List | ${config.siteTitle}`}</title>
      <link rel="canonical" href={`${config.siteUrl}/nyc-bucket-list/`} />
    </Helmet>
    <NycBucketList />
  </div>
);
export default NewYorkBucketListPage;
