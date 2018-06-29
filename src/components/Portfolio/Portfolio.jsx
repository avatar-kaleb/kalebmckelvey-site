// absolute paths
import React, { Component } from "react";
import Img from "gatsby-image";

// react md
import Button from "react-md/lib/Buttons/Button";
import Card from "react-md/lib/Cards/Card";
import CardActions from "react-md/lib/Cards/CardActions";
import CardText from "react-md/lib/Cards/CardText";
import CardTitle from "react-md/lib/Cards/CardTitle";
import GridList from "react-md/lib/Grids/GridList";
import Media from "react-md/lib/Media/Media";
import MediaOverlay from "react-md/lib/Media/MediaOverlay";

// Other libraries
import _ from "lodash";

// Data
import PortfolioData from "../../../data/PortfolioData";

// Styling
import "./Portfolio.scss";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [...props.images] };
  }

  getImageSizesById(id) {
    const foundNode = _.find(this.state.images, image =>
      image.node.sizes.src.includes(id)
    );

    if (foundNode) {
      return foundNode.node.sizes;
    }
    return {};
  }

  render() {
    const rows = [];

    // sort portfolio items
    PortfolioData.sort((a, b) => {
      const aCategory = a.category.toUpperCase();
      const bCategory = b.category.toUpperCase();
      if (aCategory < bCategory) {
        return -1;
      }

      if (aCategory > bCategory) {
        return 1;
      }

      return 0;
    });

    // loop through portfolio data
    PortfolioData.forEach(portfolioItem => {
      // create tech items
      let tech = "";
      portfolioItem.tech.forEach(techItem => {
        tech += `<li key=${techItem.name}><a href="${techItem.link}">
          ${techItem.name}
          </a></li>`;
      });

      let action = "";
      if (portfolioItem.url.length > 0) {
        action = (
          <CardActions className="md-divider-border md-divider-border--bottom">
            <Button flat secondary href={portfolioItem.url}>
              View Project
            </Button>
          </CardActions>
        );
      }
      // create cards
      rows.push(
        <Card raise key={portfolioItem.id}>
          <Media>
            <Img
              className="animated pulse"
              sizes={this.getImageSizesById(portfolioItem.id) || ""}
              alt="Nature from lorempixel" // TODO update alts in data
            />
            <MediaOverlay>
              <CardTitle
                title={`${portfolioItem.category}: ${portfolioItem.title}`}
                subtitle={portfolioItem.subtitle}
              />
            </MediaOverlay>
          </Media>
          {action}
          <CardText>
            <h3>Summary</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: portfolioItem.summary
              }}
            />
            <h3>Tech Stack</h3>
            <ul dangerouslySetInnerHTML={{ __html: tech }} />
          </CardText>
        </Card>
      );
    });
    return (
      <GridList
        className="portfolio-container"
        desktopSize={6}
        tabletSize={8}
        position="center"
      >
        {rows}
      </GridList>
    );
  }
}

export default Portfolio;
