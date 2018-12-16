import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from '../../layout';
import AboutTheJourney from '../../components/AboutTheJourney/AboutTheJourney';
import config from '../../../data/SiteConfig';

class AboutTheJourneyPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="About the Journey">
        <PageTransition>
          <div>
            <Helmet>
              <title>{`Journey To Achieve | ${config.siteTitle}`}</title>
              <link rel="canonical" href={`${config.siteUrl}/journey-to-achieve/about-the-journey`} />
            </Helmet>
            <AboutTheJourney />
          </div>
        </PageTransition>
      </Layout>
    );
  }
}

export default AboutTheJourneyPage;
