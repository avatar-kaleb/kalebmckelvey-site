import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";
import Avatar from "react-md/lib/Avatars";
import CardText from "react-md/lib/Cards/CardText";
import FontIcon from "react-md/lib/FontIcons";
import { navigateTo } from "gatsby-link";
import Media, { MediaOverlay } from "react-md/lib/Media";
import ParticleEffectButton from "react-particle-effect-button";
import PostTags from "../PostTags/PostTags";
import "./PostPreview.scss";

class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true,
      hidden: false
    };

    this.setHidden = this.setHidden.bind(this);
    this.navToPostOnComplete = this.navToPostOnComplete.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }

    this.setHidden = this.setHidden.bind(this);
  }

  setHidden(e) {
    this.setState((prevState) => ({ hidden: !prevState.hidden }));
  }

  navToPostOnComplete(path, e) {
    navigateTo(path);
  }

  render() {
    const { postInfo } = this.props;
    const { mobile } = this.state;
    const expand = mobile;
    /* eslint no-undef: "off" */
    const cover =
      postInfo.cover.substring(0, 1) === "/"
        ? __PATH_PREFIX__ + postInfo.cover
        : postInfo.cover;
    const coverHeight = mobile ? 162 : 225;
    return (
      <Card key={postInfo.path} raise className="md-grid md-cell md-cell--12">
        <Media
          onClick={this.setHidden}
          style={{
            backgroundImage: `url(${cover})`,
            height: `${coverHeight}px`
          }}
          className="post-preview-cover"
        >
          <MediaOverlay>
            <CardTitle title={postInfo.title}>
              <ParticleEffectButton
                className="md-cell--right"
                color="#ff6f00"
                duration={300}
                hidden={this.state.hidden}
                onComplete={e => this.navToPostOnComplete(postInfo.path, e)}
                oscillationCoefficient={30}
                particlesAmountCoefficient={5}
              >
                <Button raised secondary>
                  Read
                </Button>
              </ParticleEffectButton>
            </CardTitle>
          </MediaOverlay>
        </Media>
        <CardTitle
          expander={expand}
          avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
          title={`Published on ${postInfo.date}`}
          subtitle={`${postInfo.timeToRead} min read`}
        />

        <CardText expandable={expand}>
          {postInfo.excerpt}
          <PostTags tags={postInfo.tags} />
        </CardText>
      </Card>
    );
  }
}

export default PostPreview;
