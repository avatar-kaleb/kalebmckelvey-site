// absolute
import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Media from 'react-md/lib/Media/Media';
// relative
import InspirationData from '../../../data/InspirationData';
import ObservationData from '../../../data/ObservationData';
import InspirationalImage from '../../images/Observations-AustriaPic.jpg';
import InspirationList from '../InspirationList/InspirationList';
import ObservationList from '../ObservationList/ObservationList';

/**
 * Observations Page Component
 */
const Observations = () => (
  <div className="observations wrapper-flex-column--center md-grid mobile-fix">
    <Card className="md-cell--center md-cell--8 md-cell--10-tablet">
      <Media aspectRatio="4-3">
        <img
          className="animated pulse"
          src={InspirationalImage}
          alt="A male with a black tuxedo on in a nature setting."
        />
      </Media>

      <CardText className="animated zoomInUp">
        <p>
          Below are a list of random thoughts, inspirations, and observations recorded through my
          journey to become an achiever. This will be one easy place to track them all, letting me
          revisit them as needed.
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
export default Observations;
