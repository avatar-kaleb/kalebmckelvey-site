// absolute
import React, { Component } from "react";
import Cell from "react-md/lib/Grids/Cell";
import Paper from "react-md/lib/Papers/Paper";

// relative
import AvatarImage from "../../components/AvatarImage/AvatarImage";
import PostListing from "../../components/PostListing/PostListing";
import kalebWelcomeImage from "../../images/Home-KalebWelcomePic.jpg";

// CSS
import "./Home.scss";

class Home extends Component {
  render() {
    const { postEdges } = this.props;
    return (
      <div className="home-wrapper mobile-fix">
        <Paper
          className="md-grid paper-background--white"
          zDepth={0}
          raiseOnHover
        >
          <Cell
            align="middle"
            desktopOffset={1}
            desktopSize={3}
            tabletSize={3}
            phoneSize={4}
            position="center"
          >
            <AvatarImage src={kalebWelcomeImage} alt="test" />
          </Cell>
          <Cell
            align="middle"
            className="animated jackInTheBox"
            desktopOffset={1}
            desktopSize={6}
            tabletSize={5}
            phoneSize={4}
            position="center"
          >
            <h3>Welcome to the Site!</h3>
            <p>
              Hola - I&apos;m Kaleb, a Staff Software Engineer striving to make
              my dreams into reality!
            </p>
            <p>
              On my blog, I&apos;ll be sharing my principles, recommendations,
              adventures, and web development tips on my journey to achieve.
            </p>
            <p>
              <strong>Join me</strong> on the road to achievement as we make a
              positive impact on the world together!!
              <br />
              <br />
              <em>
                The site is still in transition phase, please excuse any links I
                missed. More updates coming soon!
              </em>
            </p>
          </Cell>
        </Paper>

        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default Home;
