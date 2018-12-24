import React from 'react';
import Paper from 'react-md/lib/Papers/Paper';
import _ from 'lodash';
import PostAutocomplete from '../PostAutocomplete/PostAutocomplete';
import PostPreview from '../PostPreview/PostPreview';

function filterPosts(allPosts, autocompleteText) {
  return _.filter(allPosts, post => post.title.includes(autocompleteText));
}

/**
 * A list of posts with a search field option
 */
class PostListing extends React.Component {
  constructor(props) {
    super(props);

    const allPosts = this.getPostList();
    this.state = {
      allPostTitles: this.getPostTitles(),
      postList: allPosts,
      filteredPosts: [...allPosts]
    };
  }

  /**
   * Get a list of post data we want to display from a list of post edges
   */
  getPostList() {
    const { postEdges } = this.props;

    return postEdges.map(postEdge => ({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead
    }));
  }

  /**
   * Get a list of post titles for the autocomplete search
   */
  getPostTitles() {
    const { postEdges } = this.props;
    return postEdges.map(postEdge => postEdge.node.frontmatter.title);
  }

  /**
   * React render function
   */
  render() {
    const { allPostTitles, postList, filteredPosts } = this.state;
    const { withSearch } = this.props;
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        {withSearch && (
          <Paper className="md-grid md-cell--11 mobile-fix paper-background--white  margin-bottom--small" zDepth={2}>
            <PostAutocomplete
              allPostTitles={allPostTitles}
              filterPosts={_.debounce(event => {
                this.setState({
                  filteredPosts: filterPosts(postList, event)
                });
              }, 500)}
            />
          </Paper>
        )}
        <div className="md-grid md-cell--9 mobile-fix">
          {filteredPosts.map(post => (
            <PostPreview key={post.title} postInfo={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostListing;
