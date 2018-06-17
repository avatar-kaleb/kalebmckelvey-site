import React, { Component } from "react";
import {
  Avatar,
  Button,
  Card,
  CardTitle,
  CardText,
  Cell,
  Grid,
  Media,
  MediaOverlay,
  Paper
} from "react-md";
import PostListing from "../../components/PostListing/PostListing";
import kalebWelcomeImage from "../../images/Home-KalebWelcomePic.jpg";
import AvatarImage from "../../components/AvatarImage/AvatarImage";

import "./Home.scss";

class Home extends Component {
  render() {
    const { postEdges } = this.props;
    return (
      <div className="home-wrapper mobile-fix">
        {/* <Cell size={12} tabletSize={8} phoneSize={4}> */}
        <Paper
          className="md-grid paper-background--white"
          zDepth={0}
          raiseOnHover
        >
          {/* <Grid> */}
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
            </p>
          </Cell>
          {/* </Cell> */}
          {/* </Grid> */}
        </Paper>

        {/* <Cell size={2} tabletSite={2} phoneSize={1}> */}
        {/* </Cell> */}
        {/* <Card className="md-block-centered" raise>
            <CardTitle title="Welcome to the site!!" />
            <CardText>
              <p>
                Hola - I&apos;m Kaleb, a Staff Software Engineer striving to
                make my dreams into reality!
              </p>
              <p>
                On my blog, I&apos;ll be sharing my principles, recommendations,
                adventures, and web development tips on my journey to achieve.
              </p>
              <p>
                <strong>Join me</strong> on the road to achievement as we make a
                positive impact on the world together!!
              </p>
            </CardText>
          </Card> */}
        {/* </Cell> */}
        {/* </Grid> */}
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default Home;
