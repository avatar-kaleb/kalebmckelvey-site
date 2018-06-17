import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardTitle,
  CardText,
  Cell,
  Grid,
  Media,
  MediaOverlay,
  Paper
} from "react-md";
import Helmet from "react-helmet";
// import AvatarImage from "../components/AvatarImage/AvatarImage";
// import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import Home from "../components/Home/Home";

import config from "../../data/SiteConfig";
// import kalebWelcomeImage from "../images/Home-KalebWelcomePic.jpg";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet>
          <title>{config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}`} />
        </Helmet>
        <SEO postEdges={postEdges} />
        <Home postEdges={postEdges} />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
