// absolute
import React from 'react';
import Cell from 'react-md/lib/Grids/Cell';
import Paper from 'react-md/lib/Papers/Paper';
import FourOhFourImage from '../../images/FourOhFour-Versailles Pic.jpg';
// relative
import AvatarImage from '../AvatarImage/AvatarImage';
import PostListing from '../PostListing/PostListing';
// CSS
import './FourOhFour.scss';



/**
 * 404 page that has recent posts listed
 * @param {Array} postEdges - list of recent posts from GQL
 */
const FourOhFour = ({ postEdges }) => (
  <section className="fourOhFour mobile-fix">
    <Paper className="md-grid md-background--card" zDepth={2}>
      <Cell align="middle" desktopOffset={1} desktopSize={3} tabletSize={3} phoneSize={4} position="center">
        <AvatarImage
          alt="Person with their back to the camera looking the towards the Palace of Versailles!"
          animation="flipInY"
          src={FourOhFourImage}
        />
      </Cell>
      <Cell align="middle" desktopOffset={1} desktopSize={6} tabletSize={5} phoneSize={4} position="center">
        <h2>Uh Oh! 404 Alert!</h2>
        <h3>I&#8217;m having trouble finding what your looking for!!</h3>
        <section>
          <p className="md-body-2">
            We&#8217;re sorry about that, please check out the list of recent posts below to get back to your journey!
          </p>
        </section>
      </Cell>
    </Paper>

    <PostListing postEdges={postEdges} />
  </section>
);

export default FourOhFour;
