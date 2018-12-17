import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import FourOhFour from '../components/FourOhFour/FourOhFour';
import config from '../../data/SiteConfig';

class FourOhFourPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <div className="about-container">
        <Helmet>
          <title>{`404 | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/404`} />
        </Helmet>
        <FourOhFour postEdges={postEdges} />
      </div>
    );
  }
}

export default FourOhFourPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query FourOhFourQuery {
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
