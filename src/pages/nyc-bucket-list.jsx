import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions';

import NycBucketList from '../components/NycBucketList/NycBucketList';
import config from '../../data/SiteConfig';

class NewYorkBucketListPage extends Component {
  render() {
    return (
      <PageTransition>
        <div className="about-container">
          <Helmet>
            <title>{`Contact Me | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/nyc-bucket-list/`} />
          </Helmet>
          <NycBucketList />
        </div>
      </PageTransition>
    );
  }
}

export default NewYorkBucketListPage;
