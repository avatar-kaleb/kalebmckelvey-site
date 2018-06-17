import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
// import { Document } from "react-pdf";
// import CardText from "react-md/lib/Cards/CardText";
// import UserLinks from "../UserLinks/UserLinks";
// import config from "../../../data/SiteConfig";
import resumePdf from "../../documents/KalebMcKelveyResume.pdf";
import "./Resume.scss";

class Resume extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="resume-wrapper" />
          {/* <Document
            file={{
              url:
                "/static/KalebMcKelveyResume-b2b8f84b61cdaaa076ddc3b5943b1164.pdf"
            }}
          /> */}
        </Card>
      </div>
    );
  }
}

export default Resume;
