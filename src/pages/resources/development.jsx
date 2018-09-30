import React, { Component } from "react";
import Helmet from "react-helmet";
import PageTransition from "gatsby-plugin-page-transitions";

import DevelopmentResources from "../../components/DevelopmentResources/DevelopmentResources";
import config from "../../../data/SiteConfig";

class DevelopmentResourcesPage extends Component {
  render() {
    return (
      <PageTransition>
        <div className="">
          <Helmet>
            <title>{`Development Resources | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/resources/development/`} />
          </Helmet>
          <DevelopmentResources />
        </div>
      </PageTransition>
    );
  }
}

export default DevelopmentResourcesPage;
