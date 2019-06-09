import React from 'react';
import Helmet from 'react-helmet';

import { graphql } from 'gatsby';
import SEO from '../components/SEO/SEO';
import Home from '../components/Home/Home';

import config from '../../data/SiteConfig';

const Index = React.memo(({ data: { allMarkdownRemark: { edges: postEdges } } }) => (
  <div className='index-container'>
    <Helmet>
      <title>{config.siteTitle}</title>
      <link rel='canonical' href={`${config.siteUrl}`} />
    </Helmet>
    <SEO postEdges={postEdges} />
    <Home postEdges={postEdges} />
  </div>
));

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
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
