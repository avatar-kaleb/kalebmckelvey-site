import React from 'react';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions';

import SEO from '../components/SEO/SEO';
import Home from '../components/Home/Home';

import config from '../../data/SiteConfig';

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <PageTransition>
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          <SEO postEdges={postEdges} />
          <Home postEdges={postEdges} />
        </div>
      </PageTransition>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10, sort: { fields: [frontmatter___date], order: DESC }) {
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
