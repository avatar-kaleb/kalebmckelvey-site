import debounce from 'lodash/debounce';
import filter from 'lodash/filter';
import toLower from 'lodash/toLower';
import React, { useState } from 'react';
import Paper from 'react-md/lib/Papers/Paper';
import PostAutocomplete from '../PostAutocomplete/PostAutocomplete';
import PostPreview from '../PostPreview/PostPreview';

function filterPosts(allPosts, autocompleteText) {
  return filter(allPosts, (post) => toLower(post.title).includes(toLower(autocompleteText)));
}

/**
 * Get a list of post titles for the autocomplete search
 */
function getPostTitles(postEdges) {
  return postEdges.map((postEdge) => postEdge.node.frontmatter.title);
}

/**
 * Get a list of post data we want to display from a list of post edges
 */
const getPostList = (postEdges) => {
  return postEdges.map((postEdge) => ({
    path: postEdge.node.fields.slug,
    tags: postEdge.node.frontmatter.tags,
    cover: postEdge.node.frontmatter.cover,
    title: postEdge.node.frontmatter.title,
    date: postEdge.node.frontmatter.date,
    excerpt: postEdge.node.excerpt,
    timeToRead: postEdge.node.timeToRead
  }));
};

/**
 * A list of posts with a search field option
 */
const PostListing = ({ postEdges, withSearch }) => {
  const [allPostTitles, setAllPostTitles] = useState(getPostTitles(postEdges));
  const [postList, setPostList] = useState(getPostList(postEdges));
  const [filteredPosts, setFilteredPosts] = useState(getPostList(postEdges));

  return (
    <div>
      {withSearch && (
        <Paper
          className="md-grid md-cell--11 mobile-fix md-background--card margin-bottom--small"
          zDepth={2}
        >
          <PostAutocomplete
            allPostTitles={allPostTitles}
            filterPosts={debounce((event) => {
              setFilteredPosts(filterPosts(postList, event));
            }, 350)}
          />
        </Paper>
      )}
      <div className="md-grid md-cell--middle mobile-fix">
        {filteredPosts.map((post) => (
          <PostPreview key={post.title} postInfo={post} />
        ))}
      </div>
    </div>
  );
};

export default PostListing;
