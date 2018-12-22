import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import Chip from 'react-md/lib/Chips';
import './PostTags.scss';

const PostTags = ({ tags }) => (
  <div className="post-tag">
    {tags &&
      tags.map(tag => (
        <Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${_.kebabCase(tag)}`}>
          <Chip label={tag} className="post-preview-tags" />
        </Link>
      ))}
  </div>
);

export default PostTags;
