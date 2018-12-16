import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from '../../layout';
import Observations from '../../components/Observations/Observations';
import config from '../../../data/SiteConfig';

class ObservationsPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Observations">
        <PageTransition>
          <div>
            <Helmet>
              <title>{`Observations | ${config.siteTitle}`}</title>
              <link rel="canonical" href={`${config.siteUrl}/journey-to-achieve/observations/`} />
            </Helmet>
            <Observations />
          </div>
        </PageTransition>
      </Layout>
    );
  }
}

export default ObservationsPage;
