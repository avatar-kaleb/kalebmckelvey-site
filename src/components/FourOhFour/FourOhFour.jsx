// absolute
import React, { Component } from 'react';
import Cell from 'react-md/lib/Grids/Cell';
import Paper from 'react-md/lib/Papers/Paper';

// relative
import AvatarImage from '../AvatarImage/AvatarImage';
import FourOhFourImage from '../../images/FourOhFour-Versailles Pic.jpg';
import PostListing from '../PostListing/PostListing';

// CSS
import './FourOhFour.scss';

class FourOhFour extends Component {
  render() {
    const { postEdges } = this.props;
    return (
      <section className="fourOhFour-wrapper mobile-fix">
        <Paper className="md-grid paper-background--white" zDepth={0}>
          <Cell align="middle" desktopOffset={1} desktopSize={3} tabletSize={3} phoneSize={4} position="center">
            <AvatarImage animation={'flipInY'} src={FourOhFourImage} alt="Person with their back to the camera looking the towards the Palace of Versailles!" />
          </Cell>
          <Cell align="middle" desktopOffset={1} desktopSize={6} tabletSize={5} phoneSize={4} position="center">
            <h2>Uh Oh! 404 Alert!</h2>
            <h3>I'm having trouble finding what your looking for!!</h3>
            <section>
              <p className="md-body-2">
                We're sorry about that, please check out the list of recent posts below to get back to your journey!
              </p>
            </section>
          </Cell>
        </Paper>

        <PostListing postEdges={postEdges} />
      </section>
    );
  }
}

export default FourOhFour;
