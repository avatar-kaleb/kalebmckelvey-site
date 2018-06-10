import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
// import CardText from "react-md/lib/Cards/CardText";
// import config from "../../../data/SiteConfig";
import "./DevelopmentResources.scss";

class DevelopmentResources extends Component {
  render() {
    return (
      <div className="developmentResources-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="developmentResources-wrapper" />
        </Card>
      </div>
    );
  }
}

export default DevelopmentResources;
