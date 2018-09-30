import React, { Component } from "react";
import Helmet from "react-helmet";
import PageTransition from "gatsby-plugin-page-transitions";

import LifeResources from "../../components/LifeResources/LifeResources";
import config from "../../../data/SiteConfig";

class LifeResourcesPage extends Component {
  render() {
    return (
      <PageTransition>
        <div>
          <Helmet>
            <title>{`Life Resources | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/resources/life/`} />
          </Helmet>
          <LifeResources />
        </div>
      </PageTransition>
    );
  }
}

export default LifeResourcesPage;
