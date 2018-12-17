import React, { Component } from 'react';
import Helmet from 'react-helmet';

import NycBucketList from '../components/NycBucketList/NycBucketList';
import config from '../../data/SiteConfig';

class NewYorkBucketListPage extends Component {
  render() {
    return (
      <div className="nyc-bucketlist-container">
        <Helmet>
          <title>{`NYC Bucketlist | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/nyc-bucket-list/`} />
        </Helmet>
        <NycBucketList />
      </div>
    );
  }
}

export default NewYorkBucketListPage;
