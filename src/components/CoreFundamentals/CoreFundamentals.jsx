import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
// import CardText from "react-md/lib/Cards/CardText";
// import config from "../../../data/SiteConfig";
import "./CoreFundamentals.scss";

class CoreFundamentals extends Component {
  render() {
    return (
      <div className="coreFundamentals-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="coreFundamentals-wrapper" />
        </Card>
      </div>
    );
  }
}

export default CoreFundamentals;
