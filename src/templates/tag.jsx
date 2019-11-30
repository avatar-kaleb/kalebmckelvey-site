import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import get from 'lodash/get'
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';

const TagTemplate = props => {
  const postEdges = get(props, 'data.allMarkdownRemark.edges', [])
  const tag = get(props, 'pathContext.tag', '')

  return (
    <div className='tag-container animated fadeIn'>
      <Helmet>
        <title>{`Posts tagged as "${tag}" | ${config.siteTitle}`}</title>
        <link rel='canonical' href={`${config.siteUrl}/tags/${tag}`} />
      </Helmet>
      <PostListing postEdges={postEdges} withSearch />
    </div>
  );
};

export default TagTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            published
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
