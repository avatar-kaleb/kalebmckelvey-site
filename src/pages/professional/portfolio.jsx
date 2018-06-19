import React, { Component } from "react";
import Helmet from "react-helmet";
import Portfolio from "../../components/Portfolio/Portfolio";
import config from "../../../data/SiteConfig";

class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  render() {
    return (
      <div className="">
        <Helmet>
          <title>{`Portfolio | ${config.siteTitle}`}</title>
          <link
            rel="canonical"
            href={`${config.siteUrl}/professional/portfolio/`}
          />
        </Helmet>
        <Portfolio images={this.state.data.allImageSharp.edges} />
      </div>
    );
  }
}

export default PortfolioPage;

/* eslint no-undef: "off" */
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
