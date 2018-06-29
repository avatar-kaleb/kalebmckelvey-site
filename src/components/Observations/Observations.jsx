import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import InspirationData from "../../../data/InspirationData";
import InspirationList from "../InspirationList/InspirationList";
import Media from "react-md/lib/Media/Media";
import ObservationData from "../../../data/ObservationData";
import ObservationList from "../ObservationList/ObservationList";

import inspirationalImage from "../../images/Observations-AustriaPic.jpg";

import "./Observations.scss";

class Observations extends Component {
  render() {
    return (
      <div className="observations-container md-grid mobile-fix">
        <Card raise className="md-cell md-cell--8 md-cell--10-tablet">
          <Media aspectRatio="4-3">
            <img
              className="animated pulse"
              src={inspirationalImage}
              alt="A male with a black tuxedo on in a nature setting."
            />
          </Media>

          <CardText className="animated zoomInUp">
            <p>
              Below are a list of random thoughts, inspirations, and
              observations recorded through my journey to become an achiever.
              This will be one easy place to track them all, letting me revisit
              them as needed.
            </p>

            <h1>Inspirations</h1>
            <InspirationList inspirations={InspirationData} />

            <br />
            <h1>Thoughts &amp; Observations</h1>
            <ObservationList observations={ObservationData} />
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Observations;
