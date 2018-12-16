import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import SEO from '../components/SEO/SEO';
import Archives from '../components/Archives/Archives';

import config from '../../data/SiteConfig';

class ArchivesPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}/archives/`} />
        </Helmet>
        <SEO postEdges={postEdges} />
        <Archives postEdges={postEdges} />
      </div>
    );
  }
}

export default ArchivesPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ArchivesQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
