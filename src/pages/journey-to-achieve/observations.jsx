import React, { Component } from "react";
import Helmet from "react-helmet";
import PageTransition from "gatsby-plugin-page-transitions";

import Observations from "../../components/Observations/Observations";
import config from "../../../data/SiteConfig";

class ObservationsPage extends Component {
  render() {
    return (
      <PageTransition>
        <div>
          <Helmet>
            <title>{`Observations | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/journey-to-achieve/observations/`} />
          </Helmet>
          <Observations />
        </div>
      </PageTransition>
    );
  }
}

export default ObservationsPage;
