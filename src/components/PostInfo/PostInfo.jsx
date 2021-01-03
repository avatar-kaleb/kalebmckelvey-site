import { Link } from 'gatsby';
import KebabCase from 'lodash/kebabCase';
import moment from 'moment';
import React from 'react';
import Avatar from 'react-md/lib/Avatars';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import FontIcon from 'react-md/lib/FontIcons';
import './PostInfo.scss';

/**
 * Post Info component to display in a card
 * @param {Object} postNode - data for a post
 */
const PostInfo = ({ postNode }) => {
  const post = postNode.frontmatter;

  return (
    <div className="post-info">
      <CardTitle
        avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
        title={`Published on ${moment(post.date).format('YYYY-MM-DD')}`}
        subtitle={`${postNode.timeToRead} min read`}
      />
      <Link className="category-link" to={`/categories/${KebabCase(post.category)}`}>
        <CardTitle
          avatar={<Avatar icon={<FontIcon iconClassName="fa fa-folder-open" />} />}
          title="In category"
          subtitle={post.category}
        />
      </Link>
    </div>
  );
};

export default PostInfo;
