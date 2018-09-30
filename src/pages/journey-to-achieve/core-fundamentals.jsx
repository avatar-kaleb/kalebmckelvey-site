import React, { Component } from "react";
import Helmet from "react-helmet";
import PageTransition from "gatsby-plugin-page-transitions";

import CoreFundamentals from "../../components/CoreFundamentals/CoreFundamentals";
import config from "../../../data/SiteConfig";

class CoreFundamentalsPage extends Component {
  render() {
    return (
      <PageTransition>
        <div>
          <Helmet>
            <title>{`Journey To Achieve | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/journey-to-achieve/about-the-journey`} />
          </Helmet>
          <CoreFundamentals />
        </div>
      </PageTransition>
    );
  }
}

export default CoreFundamentalsPage;
