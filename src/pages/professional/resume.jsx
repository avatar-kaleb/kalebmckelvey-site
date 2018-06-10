import React, { Component } from "react";
import Helmet from "react-helmet";
import Resume from "../../components/Resume/Resume";
import config from "../../../data/SiteConfig";

class ResumePage extends Component {
  render() {
    return (
      <div className="">
        <Helmet>
          <title>{`Resume | ${config.siteTitle}`}</title>
          <link
            rel="canonical"
            href={`${config.siteUrl}/professional/resume/`}
          />
        </Helmet>
        <Resume />
      </div>
    );
  }
}

export default ResumePage;
