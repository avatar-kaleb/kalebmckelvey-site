import React, { Component } from "react";
import Helmet from "react-helmet";
import Observations from "../components/Observations/Observations";
import config from "../../data/SiteConfig";

class ObservationsPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet>
          <title>{`Observations | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/observations/`} />
        </Helmet>
        <Observations />
      </div>
    );
  }
}

export default ObservationsPage;
