import React, { Component } from 'react';
import PostListing from '../PostListing/PostListing';

export default class Archives extends Component {
  render() {
    const { postEdges } = this.props;
    return (
      <div className="archives animated fadeIn slow">
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}
