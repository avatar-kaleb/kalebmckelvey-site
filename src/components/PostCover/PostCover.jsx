import React from 'react';
import './PostCover.scss';

/**
 * Post Cover for a blog post
 * @param {Object} postNode - the post data
 * @param {Boolean} isMobile - is this a mobile cover
 */
const PostCover = ({ postNode, isMobile }) => {
  const post = postNode.frontmatter;
  /* eslint no-undef: "off" */
  const cover = post.cover.substring(0, 1) === '/' ? __PATH_PREFIX__ + post.cover : post.cover;
  const coverHeight = isMobile ? 180 : 350;

  return (
    <div
      style={{ backgroundImage: `url(${cover})`, height: `${coverHeight}px` }}
      className="md-grid md-cell--10 post-cover"
    />
  );
};

export default PostCover;
