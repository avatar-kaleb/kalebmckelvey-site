import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import { Link } from 'gatsby';
import './PostSuggestions.scss';

const PostSuggestions = ({ postNode: { fields: postFields } }) => {
  const iconSize = 32;

  return (
    <div className="post-suggestions md-grid md-cell--12">
      <Link to={postFields.prevSlug} className="post-suggestion">
        <FontIcon forceFontSize forceSize={iconSize} className="secondary-color arrow-nav">
          arrow_back
        </FontIcon>
        <div className="headline-container">
          <h6 className="md-headline secondary-color">Previous</h6>
        </div>
      </Link>
      <Link to={postFields.nextSlug} className="post-suggestion">
        <div className="headline-container">
          <h6 className="md-headline secondary-color ">Next</h6>
        </div>
        <FontIcon forceFontSize forceSize={iconSize} className="secondary-color arrow-nav">
          arrow_forward
        </FontIcon>
      </Link>
    </div>
  );
};

export default PostSuggestions;
