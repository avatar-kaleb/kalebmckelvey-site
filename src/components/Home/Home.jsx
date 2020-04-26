// absolute
import React, { Component } from 'react';
import Cell from 'react-md/lib/Grids/Cell';
import Paper from 'react-md/lib/Papers/Paper';
import Typed from 'typed.js';
import { ThemeContext } from '../../context/themeContext';
import kalebWelcomeImage from '../../images/Home-KalebWelcomePic.jpg';
// relative
import AvatarImage from '../AvatarImage/AvatarImage';
import PostListing from '../PostListing/PostListing';
// CSS
import './Home.scss';

/**
 * Home Page Component
 */
class Home extends Component {
  componentDidMount() {
    this.typed = new Typed('#typed', {
      startDelay: 1000,
      stringsElement: '#typed-strings',
      typeSpeed: 15,
      showCursor: false,
    });
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    const { postEdges } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ isLightTheme, setIsLightTheme }) => (
          <section className={`home mobile-fix ${isLightTheme ? '' : 'dark-theme'}`}>
            <Paper className="md-grid md-background--card intro-card" zDepth={3}>
              <Cell
                align="middle"
                desktopOffset={1}
                desktopSize={3}
                tabletSize={3}
                phoneSize={4}
                position="center"
              >
                <AvatarImage
                  src={kalebWelcomeImage}
                  alt="Kaleb with a blue shirt on with arms wide open smiling!"
                />
              </Cell>
              <Cell
                align="middle"
                desktopOffset={1}
                desktopSize={6}
                tabletSize={5}
                phoneSize={4}
                position="center"
              >
                <h3>Welcome to the Site!</h3>
                <section id="typed-strings">
                  <p className="md-body-2">
                    Hi there - I&apos;m Kaleb, a Software Engineer at Disney striving to make my
                    dreams into reality!
                  </p>
                </section>
                <span id="typed" style={{ color: isLightTheme ? 'black' : 'white' }} />
                <br />
                <section>
                  <p className="md-body-1 p-margin--top">
                    On my blog, I&apos;ll be sharing my principles, recommendations, adventures, and
                    web development tips on my journey to achieve.
                  </p>
                  <p className="md-body-1">
                    <strong>Join me</strong>
                    &nbsp;on the road to achievement as we make a positive impact on the world
                    together!!
                  </p>
                </section>
              </Cell>
            </Paper>

            <PostListing postEdges={postEdges} />
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Home;
