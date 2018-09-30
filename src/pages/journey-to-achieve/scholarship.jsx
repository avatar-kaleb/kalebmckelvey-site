import React, { Component } from "react";
import Helmet from "react-helmet";
import PageTransition from "gatsby-plugin-page-transitions";

import Scholarship from "../../components/Scholarship/Scholarship";
import config from "../../../data/SiteConfig";

class ScholarshipPage extends Component {
  render() {
    return (
      <PageTransition>
        <div>
          <Helmet>
            <title>{`Scholarship | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/journey-to-achieve/scholarship`} />
          </Helmet>
          <Scholarship />
        </div>
      </PageTransition>
    );
  }
}

export default ScholarshipPage;
