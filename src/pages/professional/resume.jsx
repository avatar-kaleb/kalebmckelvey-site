import React, { Component } from "react";
import Helmet from "react-helmet";
import PageTransition from "gatsby-plugin-page-transitions";

import Resume from "../../components/Resume/Resume";
import config from "../../../data/SiteConfig";

class ResumePage extends Component {
  render() {
    return (
      <PageTransition>
        <div>
          <Helmet>
            <title>{`Resume | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/professional/resume/`} />
          </Helmet>
          <Resume />
        </div>
      </PageTransition>
    );
  }
}

export default ResumePage;
