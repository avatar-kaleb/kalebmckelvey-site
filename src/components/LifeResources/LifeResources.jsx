import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import chalkboardImage from "../../images/LifeResources - Chalkboard.jpeg";
import Media from "react-md/lib/Media/Media";
import ResourcesData from "../../../data/ResourceData";
import ResourcesList from "../ResourcesList/ResourcesList";

import "./LifeResources.scss";

class LifeResources extends Component {
  render() {
    return (
      <div className="lifeResources-container md-grid mobile-fix">
        <Card raise className="md-cell md-cell--8 md-cell--10-tablet">
          <Media aspectRatio="4-3">
            <img
              className="animated pulse"
              src={chalkboardImage}
              alt="A white male with a black tuxedo on in a nature setting."
            />
          </Media>
          <CardText className="animated zoomInUp">
            <p>
              <em>
                Below are lists of tools I find useful on my own journey to
                achieve. Currently, these are non affiliate links. Feel free to
                use them on your journey as well!
              </em>
            </p>
            <ResourcesList resources={ResourcesData} type="life" />
          </CardText>
        </Card>
      </div>
    );
  }
}

export default LifeResources;
