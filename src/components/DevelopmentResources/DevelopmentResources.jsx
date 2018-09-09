import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Link from "gatsby-link";
import Media from "react-md/lib/Media/Media";
import codeImage from "../../images/DevResources-Code.jpeg";
import ResourcesData from "../../../data/ResourceData";
import ResourcesList from "../ResourcesList/ResourcesList";

class DevelopmentResources extends Component {
  render() {
    return (
      <div className="developmentResources-wrapper wrapper-flex-column--center md-grid mobile-fix">
        <Card raise className="md-cell md-cell--8 md-cell--10-tablet">
          <Media aspectRatio="4-3">
            <img
              className="animated pulse"
              src={codeImage}
              alt="Computer sitting on a table with code displaying on the screen."
            />
          </Media>
          <CardText className="animated zoomInUp cardText-text">
            <p>
              <em>
                Below will be a lists of tools I use during my development process. I will be adding progressively as
                time allows - stay tuned!
              </em>
            </p>
            <p>Have a suggestion? {<Link to="/contact-me/">Let me know!</Link>}</p>
            <ResourcesList resources={ResourcesData} type="dev" />
          </CardText>
        </Card>
      </div>
    );
  }
}

export default DevelopmentResources;
