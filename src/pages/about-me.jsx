import React, { Component } from "react";
import Helmet from "react-helmet";
import PageTransition from "gatsby-plugin-page-transitions";
import AboutMe from "../components/AboutMe/AboutMe";
import config from "../../data/SiteConfig";

class AboutMePage extends Component {
  render() {
    return (
      <PageTransition>
        <div className="about-container">
          <Helmet>
            <title>{`About Me | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about-me/`} />
          </Helmet>
          <AboutMe />
        </div>
      </PageTransition>
    );
  }
}

export default AboutMePage;
