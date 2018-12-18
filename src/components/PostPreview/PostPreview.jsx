import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Button from 'react-md/lib/Buttons';
import Avatar from 'react-md/lib/Avatars';
import CardText from 'react-md/lib/Cards/CardText';
import FontIcon from 'react-md/lib/FontIcons';
import { navigate } from 'gatsby-link';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import ParticleEffectButton from 'react-particle-effect-button';
import PostTags from '../PostTags/PostTags';
import './PostPreview.scss';

class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: '#ff6f00',
      buttonHidden: false,
      mobile: true
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

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  setButtonHidden() {
    this.setState(prevState => ({ buttonHidden: !prevState.buttonHidden }));
  }

  navToPostOnClick(path, e) {
    navigate(path);
  }

  render() {
    const { postInfo } = this.props;
    const { mobile } = this.state;
    const expand = mobile;
    /* eslint no-undef: "off" */
    const cover = postInfo.cover.substring(0, 1) === '/' ? __PATH_PREFIX__ + postInfo.cover : postInfo.cover;
    const coverHeight = mobile ? 162 : 225;

    return (
      <Card key={postInfo.path} raise className="md-grid md-cell md-cell--12">
        <Media
          style={{
            backgroundImage: `url(${cover})`,
            height: `${coverHeight}px`
          }}
          className="post-preview-cover"
          onClick={e => this.navToPostOnClick(postInfo.path, e)}
        >
          <MediaOverlay>
            <CardTitle title={postInfo.title} onClick={e => this.navToPostOnClick(postInfo.path, e)} />
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

        <CardActions className="md-divider-border md-divider-border--top">
          <ParticleEffectButton
            color={this.state.buttonColor}
            duration={275}
            hidden={this.state.buttonHidden}
            onComplete={e => this.navToPostOnClick(postInfo.path, e)}
            oscillationCoefficient={30}
            particlesAmountCoefficient={5}
          >
            {/* Raised looked better, outside of MD spec though */}
            <Button raised primary onClick={this.setButtonHidden}>
              Read more!
            </Button>
          </ParticleEffectButton>
        </CardActions>
      </Card>
    );
  }
}

export default PostPreview;
