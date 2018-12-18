import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Card from 'react-md/lib/Cards/Card';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Chip from 'react-md/lib/Chips/Chip';
// import _ from 'lodash';
import Media from 'react-md/lib/Media/Media';
import MediaOverlay from 'react-md/lib/Media/MediaOverlay';
// CSS
import './BucketListCard.scss';

const BucketListCard = ({ bucketListItem }) => (
  <Card className="bucketlist-wrapper md-block-centered md-cell">
    <Media>
      <img src={`/bucket-list-images/${bucketListItem.featuredImageUrl}`} alt={bucketListItem.featuredImageAlt} />
      <MediaOverlay>
        <CardTitle title={bucketListItem.title} subtitle={bucketListItem.status} />
      </MediaOverlay>
    </Media>

    <CardText className="metadata-wrapper">
      <section className="borough-cost-wrapper">
        <p>{bucketListItem.borough}</p>
        <p className="cost-level-text">{bucketListItem.costLevel}</p>
      </section>
      <p>{bucketListItem.description}</p>
      <section className="category-wrapper">
        {bucketListItem.categories.map(category => (
          <Chip className="category-chip" label={category} />
        ))}
      </section>
    </CardText>
    <CardActions className="md-divider-border md-divider-border--top">
      <Button flat primary disabled={bucketListItem.blogPostLink.length === 0}>
        Blogpost
      </Button>
      <Button flat primary disabled={bucketListItem.youtubeVideoLink.length === 0}>
        Youtube
      </Button>
    </CardActions>
  </Card>
);

export default BucketListCard;
