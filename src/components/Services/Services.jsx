import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import CardTitle from "react-md/lib/Cards/CardTitle";
import ExpansionPanel from "react-md/lib/ExpansionPanels/ExpansionPanel";
import ExpansionList from "react-md/lib/ExpansionPanels/ExpansionList";
// import CardText from "react-md/lib/Cards/CardText";
// import UserLinks from "../UserLinks/UserLinks";
// import config from "../../../data/SiteConfig";
import "./Services.scss";

class Services extends Component {
  render() {
    return (
      <div className="services-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8" title="WordPress">
          <CardTitle
            title="Service Offerings"
            subtitle="Clean, modern, responsive"
          />
          <CardText>
            <p>My services page will be coming soon!</p>
            <p>
              If you have an idea and want to chat about options, send over an
              e-mail at:{" "}
              <a href="mailto:kalebmckelvey3@gmail.com">
                {" "}
                KalebMcKelvey3@gmail.com
              </a>!
            </p>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Services;
