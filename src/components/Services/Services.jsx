import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
// import CardText from "react-md/lib/Cards/CardText";
// import UserLinks from "../UserLinks/UserLinks";
// import config from "../../../data/SiteConfig";
import "./Services.scss";

class Services extends Component {
  render() {
    return (
      <div className="services-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="services-wrapper" />
        </Card>
      </div>
    );
  }
}

export default Services;
