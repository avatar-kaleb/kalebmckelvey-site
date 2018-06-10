import React, { Component } from "react";
import Helmet from "react-helmet";
import LifeResources from "../../components/LifeResources/LifeResources";
import config from "../../../data/SiteConfig";

class LifeResourcesPage extends Component {
  render() {
    return (
      <div className="">
        <Helmet>
          <title>{`Life Resources | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/professional/life/`} />
        </Helmet>
        <LifeResources />
      </div>
    );
  }
}

export default LifeResourcesPage;
