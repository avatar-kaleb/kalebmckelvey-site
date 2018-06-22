import React from "react";
import PostPreview from "../PostPreview/PostPreview";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    // this.props.postEdges.forEach((postEdge, index) => {
    for (let index = 0; index < this.props.postEdges.length; index++) {
      const element = this.props.postEdges[index];
      postList.push({
        path: element.node.fields.slug,
        tags: element.node.frontmatter.tags,
        cover: element.node.frontmatter.cover,
        title: element.node.frontmatter.title,
        date: element.node.frontmatter.date,
        excerpt: element.node.excerpt,
        timeToRead: element.node.timeToRead
      });

      if (index > 10) {
        console.log("breaking");
        break;
      }
    }
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <div className="md-grid md-cell--8 mobile-fix">
          {postList.map(post => (
            <PostPreview key={post.title} postInfo={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostListing;
