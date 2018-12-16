// absolute
import React, { Component } from 'react';
import Typed from 'typed.js';
import Cell from 'react-md/lib/Grids/Cell';
import Paper from 'react-md/lib/Papers/Paper';

// relative
import AvatarImage from '../../components/AvatarImage/AvatarImage';
import kalebWelcomeImage from '../../images/Home-KalebWelcomePic.jpg';
import PostListing from '../../components/PostListing/PostListing';

// CSS
import './Home.scss';

class Home extends Component {
  render() {
    const { postEdges } = this.props;
    return (
      <section className="home-wrapper mobile-fix">
        <Paper className="md-grid paper-background--white" zDepth={0}>
          <Cell align="middle" desktopOffset={1} desktopSize={3} tabletSize={3} phoneSize={4} position="center">
            <AvatarImage src={kalebWelcomeImage} alt="Kaleb with a blue shirt on with arms wide open smiling!" />
          </Cell>
          <Cell align="middle" desktopOffset={1} desktopSize={6} tabletSize={5} phoneSize={4} position="center">
            <h3>Welcome to the Site!</h3>
            <section id="typed-strings">
              <p className="md-body-2">
                Hi there - I&apos;m Kaleb, a Staff Software Engineer striving to make my dreams into reality!
              </p>
            </section>
            <span id="typed" />
            <br />
            <section>
              <p className="md-body-1 p-margin--top">
                On my blog, I&apos;ll be sharing my principles, recommendations, adventures, and web development tips on
                my journey to achieve.
              </p>
              <p className="md-body-1">
                <strong>Join me</strong> {' '}on the road to achievement as we make a positive impact on the world together!!
              </p>
            </section>
          </Cell>
        </Paper>

        <PostListing postEdges={postEdges} />
      </section>
    );
  }
}

export default Home;
