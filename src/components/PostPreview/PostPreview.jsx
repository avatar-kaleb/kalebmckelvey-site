import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Button from 'react-md/lib/Buttons';
import Avatar from 'react-md/lib/Avatars';
import CardText from 'react-md/lib/Cards/CardText';
import FontIcon from 'react-md/lib/FontIcons';

// relative
import Media, { MediaOverlay } from 'react-md/lib/Media';
import { navigate } from 'gatsby';
import ParticleEffectButton from 'react-particle-effect-button';
import { particleConfig, screenWidths } from '../../constants/config';
import PostTags from '../PostTags/PostTags';

// styles
import './PostPreview.scss';

const navToPostOnClick = (path, e) => navigate(path);

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
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  setButtonHidden() {
    this.setState(prevState => ({ buttonHidden: !prevState.buttonHidden }));
  }

  handleResize() {
    if (window.innerWidth >= screenWidths.maxMobile) {
      this.setState({ isMobile: false });
    } else {
      this.setState({ isMobile: true });
    }
  }

  render() {
    const { buttonHidden, isMobile } = this.state;
    const { postInfo } = this.props;
    /* eslint no-undef: "off" */
    const cover = postInfo.cover.substring(0, 1) === '/' ? __PATH_PREFIX__ + postInfo.cover : postInfo.cover;
    const coverHeight = isMobile ? this.coverHeights.mobile : this.coverHeights.other;

    return (
      <div className="post-preview">
        <Card key={postInfo.path} raise className="md-grid md-cell md-cell--12">
          <Media
            style={{
              backgroundImage: `url(${cover})`,
              height: `${coverHeight}px`
            }}
            className="post-preview-cover"
            onClick={e => navToPostOnClick(postInfo.path, e)}
          >
            <MediaOverlay>
              <CardTitle title={postInfo.title} onClick={e => navToPostOnClick(postInfo.path, e)} />
            </MediaOverlay>
          </Media>
          <CardTitle
            expander={isMobile}
            avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
            title={`Published on ${postInfo.date}`}
            subtitle={`${postInfo.timeToRead} min read`}
          />
          <CardText expandable={isMobile}>
            {postInfo.excerpt}
            <PostTags tags={postInfo.tags} />
          </CardText>

          <CardActions className="md-divider-border md-divider-border--top">
            <ParticleEffectButton
              color={particleConfig.color}
              duration={particleConfig.duration}
              hidden={buttonHidden}
              onComplete={e => navToPostOnClick(postInfo.path, e)}
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
