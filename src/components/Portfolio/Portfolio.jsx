// absolute paths
import Img from 'gatsby-image';
import find from 'lodash/find';
import React, { useEffect } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Card from 'react-md/lib/Cards/Card';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import GridList from 'react-md/lib/Grids/GridList';
import Media from 'react-md/lib/Media/Media';
import MediaOverlay from 'react-md/lib/Media/MediaOverlay';
// Data
import PortfolioData from '../../../data/PortfolioData';

const Portfolio = ({ images }) => {
  useEffect(
    () => {
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
      return () => {
        cleanup;
      };
    },
    [PortfolioData]
  );

  const getImageSizesById = (id) => {
    const foundNode = find(images, (image) => image.node.sizes.src.includes(id));

    if (foundNode) {
      return foundNode.node.sizes;
    }

    return {};
  };

  const rows = [];
  // loop through portfolio data
  PortfolioData.forEach((portfolioItem) => {
    // create tech items
    let tech = '';
    portfolioItem.tech.forEach((techItem) => {
      tech += `<li key=${techItem.name}><a href="${techItem.link}">
          ${techItem.name}
          </a></li>`;
    });

    let action = '';
    if (portfolioItem.url.length > 0) {
      action = (
        <CardActions className="md-divider-border md-divider-border--bottom">
          <Button flat secondary href={portfolioItem.url}>
            View Live Project
          </Button>
        </CardActions>
      );
    }
    // create cards
    rows.push(
      <Card key={portfolioItem.id}>
        <Media>
          <Img
            sizes={getImageSizesById(portfolioItem.id) || ''}
            alt="" // TODO update alts in data
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
      className="portfolio-container animated fadeIn slow"
      desktopSize={6}
      tabletSize={8}
      position="center"
    >
      {rows}
    </GridList>
  );
};

export default Portfolio;
