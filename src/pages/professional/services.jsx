import React, { Component } from "react";
import Helmet from "react-helmet";
import PageTransition from "gatsby-plugin-page-transitions";

import Services from "../../../src/components/Services/Services";
import config from "../../../data/SiteConfig";

class ServicesPage extends Component {
  render() {
    return (
      <PageTransition>
        <div>
          <Helmet>
            <title>{`Services | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/professional/services/`} />
          </Helmet>
          <Services />
        </div>
      </PageTransition>
    );
  }
}

export default ServicesPage;
