import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';

const CategoryTemplate = props => {
  const {
    data: {
      allMarkdownRemark: { edges: postEdges }
    },
    pathContext: { category }
  } = props;
  return (
    <div className='category-container animated fadeIn slow'>
      <Helmet>
        <title>{`Posts in category "${category}" | ${config.siteTitle}`}</title>
        <link rel='canonical' href={`${config.siteUrl}/categories/${category}`} />
      </Helmet>
      <PostListing postEdges={postEdges} withSearch />
    </div>
  );
};

export default CategoryTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category }, published: { eq: true } } }
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
