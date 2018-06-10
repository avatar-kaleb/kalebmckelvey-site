import React, { Component } from "react";
import Helmet from "react-helmet";
import CoreFundamentals from "../../components/CoreFundamentals/CoreFundamentals";
import config from "../../../data/SiteConfig";

class CoreFundamentalsPage extends Component {
  render() {
    return (
      <div className="">
        <Helmet>
          <title>{`Journey To Achieve | ${config.siteTitle}`}</title>
          <link
            rel="canonical"
            href={`${config.siteUrl}/journey-to-achieve/about-the-journey`}
          />
        </Helmet>
        <CoreFundamentals />
      </div>
    );
  }
}

export default CoreFundamentalsPage;
