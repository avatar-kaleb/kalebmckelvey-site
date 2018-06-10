import React, { Component } from "react";
import Helmet from "react-helmet";
import Portfolio from "../../components/Portfolio/Portfolio";
import config from "../../../data/SiteConfig";

class PortfolioPage extends Component {
  render() {
    return (
      <div className="">
        <Helmet>
          <title>{`Portfolio | ${config.siteTitle}`}</title>
          <link
            rel="canonical"
            href={`${config.siteUrl}/professional/portfolio/`}
          />
        </Helmet>
        <Portfolio />
      </div>
    );
  }
}

export default PortfolioPage;
