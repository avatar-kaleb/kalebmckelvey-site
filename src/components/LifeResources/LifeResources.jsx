import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
// import CardText from "react-md/lib/Cards/CardText";
// import config from "../../../data/SiteConfig";
import "./LifeResources.scss";

class LifeResources extends Component {
  render() {
    return (
      <div className="lifeResources-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="lifeResources-wrapper" />
        </Card>
      </div>
    );
  }
}

export default LifeResources;
