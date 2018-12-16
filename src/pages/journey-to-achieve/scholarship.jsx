import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from '../../layout';

import Scholarship from '../../components/Scholarship/Scholarship';
import config from '../../../data/SiteConfig';

class ScholarshipPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Scholarship">
        <PageTransition>
          <div>
            <Helmet>
              <title>{`Scholarship | ${config.siteTitle}`}</title>
              <link rel="canonical" href={`${config.siteUrl}/journey-to-achieve/scholarship`} />
            </Helmet>
            <Scholarship />
          </div>
        </PageTransition>
      </Layout>
    );
  }
}

export default ScholarshipPage;
