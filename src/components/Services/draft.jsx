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
        <p>My services page will be coming soon! If you have an idea and want a quote, send over an e-mail at:{" "}
          <a href="mailto:kalebmckelvey3@gmail.com"> KalebMcKelvey3@gmail.com
          </a>!
        </p>
      </div>


        {/* <Card className="md-grid md-cell--8" title="WordPress">
          <CardTitle title="WordPress" subtitle="Clean, modern, responsive" />
          <div className="services-wrapper" />
          <CardText>
            <p>
              My WordPress services are for small businesses, portfolios, and
              individuals who need help with creating a website, but don't want
              to pay the high prices of web design businesses.
            </p>
            <p>
              Together we can improve your online presence through a great
              website suited to your needs. I offer the three packages below!
            </p>
            <ExpansionList className="md-cell md-cell--12">
              <ExpansionPanel
                label="Main label"
                secondaryLabel="Secondary label"
                cancelLabel="Collapse"
                saveLabel="Get a quote!"
                saveSecondary
                defaultExpanded
              >
                <p>
                  Any content can go in here. This will be visible when it has
                  been expanded.
                </p>
              </ExpansionPanel>
              <ExpansionPanel
                label="Main label"
                secondaryLabel="Secondary label"
              >
                <p>
                  Any content can go in here. This will be visible when it has
                  been expanded.
                </p>
              </ExpansionPanel>
              <ExpansionPanel
                label="Main label"
                secondaryLabel="Secondary label"
              >
                <p>
                  Any content can go in here. This will be visible when it has
                  been expanded.
                </p>
              </ExpansionPanel>
            </ExpansionList>
          </CardText> */
        // </Card>}
    );
  }
}

export default Services;
