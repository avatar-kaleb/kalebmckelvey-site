import React from 'react';
import PostListing from '../PostListing/PostListing';

/**
 * Archives Page Component - shows all posts in post listing
 * @param {Array} postEdges
 */
const Archives = ({ postEdges }) => (
  <div className="archives animated fadeIn slow">
    <PostListing postEdges={postEdges} />
  </div>
);

export default Archives;
