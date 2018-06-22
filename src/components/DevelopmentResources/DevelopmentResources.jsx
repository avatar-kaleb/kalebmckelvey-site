import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Media from "react-md/lib/Media/Media";
import codeImage from "../../images/DevResources-Code.jpeg";
import ResourcesData from "../../../data/ResourceData";
import ResourcesList from "../ResourcesList/ResourcesList";

import "./DevelopmentResources.scss";

class DevelopmentResources extends Component {
  render() {
    return (
      <div className="developmentResources-container md-grid mobile-fix">
        <Card raise className="md-cell md-cell--7 md-cell--10-tablet">
          <Media aspectRatio="4-3">
            <img
              src={codeImage}
              alt="Computer sitting on a table with code displaying on the screen."
            />
          </Media>
          <CardText>
            <p>
              <em>
                Below will be a lists of tools I use during my development
                process.
              </em>
            </p>
            {/* <ResourcesList resources={ResourcesData} type="dev" /> */}
            <p>I will be adding progressively as time allows - stay tuned!</p>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default DevelopmentResources;
