import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Navigation from "../components/Navigation/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .split("/")
      .join("");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "categories") {
      title = "Categories";
    } else if (currentPath === "about-me") {
      title = "About Me";
    } else if (currentPath === "professionalportfolio") {
      title = "My Portfolio";
    } else if (currentPath === "journey-to-achieveabout-the-journey") {
      title = "About the Journey";
    } else if (currentPath === "journey-to-achievecore-fundamentals") {
      title = "Core Fundamentals";
    } else if (currentPath === "resources") {
      title = "Resources";
    } else if (currentPath === "contact-me") {
      title = "Contact Me";
    } else if (currentPath === "observations") {
      title = "Observations";
    } else if (currentPath === "professionalservices") {
      title = "Services";
    } else if (currentPath.includes("tags")) {
      const tag = currentPath
        .replace("tags", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes("categories")) {
      const category = currentPath
        .replace("categories", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    } else {
      title = "Article";
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <Navigation config={config} LocalTitle={this.getLocalTitle()}>
        <div>
          <Helmet>
            <meta
              htmlAttributes="{ lang: 'en', class: 'custom-theme'}"
              name="description"
              content={config.siteDescription}
            />
          </Helmet>
          {children()}
        </div>
      </Navigation>
    );
  }
}
