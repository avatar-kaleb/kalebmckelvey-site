import { navigate } from 'gatsby';
import React, { useState } from 'react';
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

const PostPreview = ({ postInfo }) => {
  const [buttonHidden, setButtonHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const coverHeights = {
    mobile: 162,
    other: 225
  };
  /* eslint no-undef: "off" */
  const cover =
    postInfo.cover.substring(0, 1) === '/' ? __PATH_PREFIX__ + postInfo.cover : postInfo.cover;
  const coverHeight = isMobile ? coverHeights.mobile : coverHeights.other;

  // run once on mount
  useEffect(() => {
    handleResize();
  }, []);

  /**
   * Set mobile state based on size changes
   */
  const handleResize = () => {
    if (window.innerWidth >= screenWidths.maxMobile) {
      if (isMobile) {
        setIsMobile(false);
      }
    } else {
      if (!isMobile) {
        setIsMobile(true);
      }
    }
  };

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
            <CardTitle title={postInfo.title} onClick={(e) => navToPostOnClick(postInfo.path, e)} />
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
            <Button raised primary onClick={setButtonHidden(!buttonHidden)}>
              Read more!
            </Button>
          </ParticleEffectButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default PostPreview;
