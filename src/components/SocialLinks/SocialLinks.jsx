import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TwitterIcon,
  TwitterShareButton
} from 'react-share';
import config from '../../../data/SiteConfig';
import './SocialLinks.scss';

/**
 * Display the sharing social links
 * @param {Object} postNode - the post
 * @param {String} postPath - url of post
 * @param {Boolean} isMobile - mobile page width?
 */
const SocialLinks = ({ postNode, postPath, isMobile }) => {
  const post = postNode.frontmatter;
  const url = config.siteUrl + config.pathPrefix + postPath;
  const iconSize = isMobile ? 36 : 48;
  const filter = (count) => (count > 0 ? count : '');

  return (
    <div>
      <div className='social-links'>
        <RedditShareButton className='shareButton--cursor' url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount className='shareButton--cursor' url={url}>
            {(count) => <div className='share-count'>{filter(count)}</div>}
          </RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton className='shareButton--csursor' url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton className='shareButton--cursor' url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {(count) => <div className='share-count'>{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton
          className='shareButton--cursor'
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
      </div>
      <h6 className='social-links'>Share this post!</h6>
    </div>
  );
};

export default SocialLinks;
