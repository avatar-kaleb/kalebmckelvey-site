import React from "react";
import PostPreview from "../PostPreview/PostPreview";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    const postEdges = this.props.postEdges;
    // let count = 0;
    for (let idx = 0; idx < 10; idx++) {
      postList.push({
        path: postEdges[idx].node.fields.slug,
        tags: postEdges[idx].node.frontmatter.tags,
        cover: postEdges[idx].node.frontmatter.cover,
        title: postEdges[idx].node.frontmatter.title,
        date: postEdges[idx].node.frontmatter.date,
        excerpt: postEdges[idx].node.excerpt,
        timeToRead: postEdges[idx].node.timeToRead
      });
    }
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <div className="md-grid md-cell--9 mobile-fix">
          {postList.map(post => (
            <PostPreview key={post.title} postInfo={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostListing;
