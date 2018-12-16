import React, { Component } from 'react';
import Helmet from 'react-helmet';

import DevelopmentResources from '../../components/DevelopmentResources/DevelopmentResources';
import config from '../../../data/SiteConfig';

class DevelopmentResourcesPage extends Component {
  render() {
    return (
      <div className="">
        <Helmet>
          <title>{`Development Resources | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/resources/development/`} />
        </Helmet>
        <DevelopmentResources />
      </div>
    );
  }
}

export default DevelopmentResourcesPage;
