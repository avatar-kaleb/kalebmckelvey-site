import React, { Component } from "react";
import Helmet from "react-helmet";
import PageTransition from "gatsby-plugin-page-transitions";

import ContactMe from "../components/ContactMe/ContactMe";
import config from "../../data/SiteConfig";

class ContactMePage extends Component {
  render() {
    return (
      <PageTransition>
        <div className="about-container">
          <Helmet>
            <title>{`Contact Me | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/contact-me/`} />
          </Helmet>
          <ContactMe />
        </div>
      </PageTransition>
    );
  }
}

export default ContactMePage;
