import React from 'react';
import './PostCover.scss';

const PostCover = ({ postNode, mobile }) => {
  const post = postNode.frontmatter;
  /* eslint no-undef: "off" */
  const cover = post.cover.substring(0, 1) === '/' ? __PATH_PREFIX__ + post.cover : post.cover;
  const coverHeight = mobile ? 180 : 350;

  return (
    <div
      style={{ backgroundImage: `url(${cover})`, height: `${coverHeight}px` }}
      className="md-grid md-cell--9 post-cover"
    />
  );
};

export default PostCover;
