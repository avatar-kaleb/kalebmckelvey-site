import { navigate } from 'gatsby';
import React, { Component } from 'react';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';
import Card from 'react-md/lib/Cards/Card';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import FontIcon from 'react-md/lib/FontIcons';
// relative
import Media, { MediaOverlay } from 'react-md/lib/Media';
import ParticleEffectButton from 'react-particle-effect-button';
import { particleConfig, screenWidths } from '../../constants/config';
import PostTags from '../PostTags/PostTags';
// styles
import './PostPreview.scss';

/**
 * Given a path, this function uses Gatsby navigate function to get to another page
 * @param {String} path - path to link to
 * @param {Object} e - click event
 */
const navToPostOnClick = (path, e) => navigate(path);

/**
 * Post Preview is used to show summary of posts on a post listening to give a quick glimpse
 * of what the post is about
 */
class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonHidden: false,
      isMobile: true
    };

    this.coverHeights = {
      mobile: 162,
      other: 225
    };

    this.setButtonHidden = this.setButtonHidden.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
  }

  /**
   * Ths sets the button for this post preview to show or hide
   * We need this to use with particle effect button
   */
  setButtonHidden() {
    this.setState((prevState) => ({ buttonHidden: !prevState.buttonHidden }));
  }

  /**
   * Set mobile state based on size changes
   */
  handleResize() {
    if (window.innerWidth >= screenWidths.maxMobile) {
      if (this.state.isMobile) {
        this.setState({ isMobile: false });
      }
    } else {
      if (!this.state.isMobile) {
        this.setState({ isMobile: true });
      }
    }
  }

  render() {
    const { buttonHidden, isMobile } = this.state;
    const { postInfo } = this.props;

    const cover =
      postInfo.cover.substring(0, 1) === '/' ? __PATH_PREFIX__ + postInfo.cover : postInfo.cover;
    const coverHeight = isMobile ? this.coverHeights.mobile : this.coverHeights.other;

    return (
      <div className="md-cell md-cell--0-desktop-offset md-cell--0-phone-offset md-cell--4 md-cell--center post-preview margin-bottom--small">
        <Card key={postInfo.path} animate={false} className="">
          <Media
            style={{
              backgroundImage: `url(${cover})`,
              height: `${coverHeight}px`
            }}
            className="post-preview-cover"
            onClick={(e) => navToPostOnClick(postInfo.path, e)}
          >
            <MediaOverlay>
              <CardTitle
                title={postInfo.title}
                onClick={(e) => navToPostOnClick(postInfo.path, e)}
              />
            </MediaOverlay>
          </Media>
          <CardTitle
            expander={isMobile}
            avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
            title={`Published on ${postInfo.date}`}
            subtitle={`${postInfo.timeToRead} min read`}
          />
          <CardText expandable={isMobile} className="card-text">
            <p>{postInfo.excerpt}</p>
            <PostTags tags={postInfo.tags} />
          </CardText>

          <CardActions className="md-divider-border md-divider-border--top">
            <ParticleEffectButton
              color={particleConfig.color}
              duration={particleConfig.duration}
              hidden={buttonHidden}
              onComplete={(e) => navToPostOnClick(postInfo.path, e)}
              oscillationCoefficient={particleConfig.oscillationCoefficient}
              particlesAmountCoefficient={particleConfig.particlesAmountCoefficient}
            >
              {/* Raised looked better, outside of MD spec though */}
              <Button raised primary onClick={this.setButtonHidden}>
                Read more!
              </Button>
            </ParticleEffectButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default PostPreview;
