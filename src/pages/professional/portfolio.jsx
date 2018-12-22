import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Portfolio from '../../components/Portfolio/Portfolio';
import config from '../../../data/SiteConfig';

const PortfolioPage = ({ data }) => (
  <div>
    <Helmet>
      <title>{`Portfolio | ${config.siteTitle}`}</title>
      <link rel="canonical" href={`${config.siteUrl}/professional/portfolio/`} />
    </Helmet>
    <Portfolio images={data.allImageSharp.edges} />
  </div>
);

export default PortfolioPage;

export const portfolioImagesQuery = graphql`
  query portfolioImagesQuery {
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            sizes(maxWidth: 800, maxHeight: 400) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
