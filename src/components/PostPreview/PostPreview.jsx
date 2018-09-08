import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardActions from "react-md/lib/Cards/CardActions";
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
      buttonHidden: false,
      titleHidden: false
    };

    this.setButtonHidden = this.setButtonHidden.bind(this);
    this.setTitleHidden = this.setTitleHidden.bind(this);
    this.navToPostOnComplete = this.navToPostOnComplete.bind(this);
    this.handleResize = this.handleResize.bind(this);
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
  }

  setButtonHidden(e) {
    this.setState(prevState => ({ buttonHidden: !prevState.buttonHidden }));
  }

  setTitleHidden(e) {
    this.setState(prevState => ({ titleHidden: !prevState.titleHidden }));
  }

  navToPostOnComplete(path, e) {
    navigateTo(path);
  }

  render() {
    const { postInfo } = this.props;
    const { mobile } = this.state;
    const expand = mobile;
    /* eslint no-undef: "off" */
    const cover = postInfo.cover.substring(0, 1) === "/" ? __PATH_PREFIX__ + postInfo.cover : postInfo.cover;
    const coverHeight = mobile ? 162 : 225;

    return (
      <Card key={postInfo.path} raise className="md-grid md-cell md-cell--12">
        <Media
          style={{
            backgroundImage: `url(${cover})`,
            height: `${coverHeight}px`
          }}
          className="post-preview-cover"
        >
          <MediaOverlay>
            <ParticleEffectButton
              className="md-cell--right"
              color="#fff"
              duration={300}
              speed={1}
              hidden={this.state.titleHidden}
              onComplete={e => this.navToPostOnComplete(postInfo.path, e)}
              oscillationCoefficient={30}
              particlesAmountCoefficient={20}
            >
              <CardTitle title={postInfo.title} onClick={this.setTitleHidden} />
            </ParticleEffectButton>
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

        <CardActions>
          <ParticleEffectButton
            className="md-cell--right"
            color="#ff6f00"
            duration={250}
            hidden={this.state.buttonHidden}
            onComplete={e => this.navToPostOnComplete(postInfo.path, e)}
            oscillationCoefficient={30}
            particlesAmountCoefficient={5}
          >
            {/* Raised looked better, outside of MD spec though */}
            <Button raised secondary onClick={this.setButtonHidden}>
              Read
            </Button>
          </ParticleEffectButton>
        </CardActions>
      </Card>
    );
  }
}

export default PostPreview;
