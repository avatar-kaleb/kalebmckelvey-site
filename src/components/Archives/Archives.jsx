import React from 'react';
import PostListing from '../PostListing/PostListing';

const Archives = ({ postEdges }) => (
  <div className="archives animated fadeIn slow">
    <PostListing postEdges={postEdges} />
  </div>
);

export default Archives;
