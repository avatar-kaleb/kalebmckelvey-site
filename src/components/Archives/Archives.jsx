import React, { Component } from "react";
import PostListing from "../../components/PostListing/PostListing";

export default class Archives extends Component {
  render() {
    const { postEdges } = this.props;
    return (
      <div>
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}
