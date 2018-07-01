import React, { Component } from "react";
import Helmet from "react-helmet";
import Services from "../components/Services/Services";
import config from "../../data/SiteConfig";

class ServicesPage extends Component {
  render() {
    return (
      <div className="">
        <Helmet>
          <title>{`Services | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/services/`} />
        </Helmet>
        <Services />
      </div>
    );
  }
}

export default ServicesPage;
