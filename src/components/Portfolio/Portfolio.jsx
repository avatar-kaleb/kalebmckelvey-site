import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
// import CardText from "react-md/lib/Cards/CardText";
// import config from "../../../data/SiteConfig";
import "./Portfolio.scss";

class Portfolio extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="portfolio-wrapper" />
        </Card>
      </div>
    );
  }
}

export default Portfolio;
