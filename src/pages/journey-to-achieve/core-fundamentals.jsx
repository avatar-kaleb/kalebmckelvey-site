import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from '../../layout';
import CoreFundamentals from '../../components/CoreFundamentals/CoreFundamentals';
import config from '../../../data/SiteConfig';

class CoreFundamentalsPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Core Fundamentals">
        <PageTransition>
          <div>
            <Helmet>
              <title>{`Journey To Achieve | ${config.siteTitle}`}</title>
              <link rel="canonical" href={`${config.siteUrl}/journey-to-achieve/about-the-journey`} />
            </Helmet>
            <CoreFundamentals />
          </div>
        </PageTransition>
      </Layout>
    );
  }
}

export default CoreFundamentalsPage;
