import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import "./Resume.scss";

class Resume extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="resume-wrapper" />
        </Card>
      </div>
    );
  }
}

export default Resume;
