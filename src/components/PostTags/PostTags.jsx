import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import React from 'react';
import Chip from 'react-md/lib/Chips';
import './PostTags.scss';

/**
 * Displays Material Design chips for each tags
 * @param {Array} tags - list of tags for a post
 */
const PostTags = ({ tags }) => (
  <div className="post-tag">
    {tags &&
      tags.map((tag) => (
        <Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${kebabCase(tag)}`}>
          <Chip label={tag} className="post-preview-tags" />
        </Link>
      ))}
  </div>
);

export default PostTags;
