import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
// import CardText from "react-md/lib/Cards/CardText";
// import config from "../../../data/SiteConfig";
import "./Scholarship.scss";

class Scholarship extends Component {
  render() {
    return (
      <div className="scholarship-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="scholarship-wrapper" />
        </Card>
      </div>
    );
  }
}

export default Scholarship;
