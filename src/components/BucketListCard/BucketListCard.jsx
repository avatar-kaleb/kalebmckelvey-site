import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Card from 'react-md/lib/Cards/Card';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Chip from 'react-md/lib/Chips/Chip';
import Media from 'react-md/lib/Media/Media';
import MediaOverlay from 'react-md/lib/Media/MediaOverlay';
import './BucketListCard.scss';

/**
 * This component displays a summary card with title, category, cost level, description, and
 * links to the blog posts / youtube posts from the data
 * @param {Object} bucketListItem -The bucket list data to show in card form
 */
const BucketListCard = ({ bucketListItem }) => (
  <Card className="bucketlist-card md-block-centered md-cell">
    <Media>
      <img
        src={`/bucket-list-images/${bucketListItem.featuredImageUrl}`}
        alt={bucketListItem.featuredImageAlt}
      />
      <MediaOverlay>
        <CardTitle title={bucketListItem.title} subtitle={bucketListItem.status} />
      </MediaOverlay>
    </Media>

    <CardText className="card-text">
      <section className="borough-and-cost">
        <p>{bucketListItem.location}</p>
        <p className="cost-level-text">{bucketListItem.costLevel}</p>
      </section>
      <p>{bucketListItem.description}</p>
      <section className="categories">
        {bucketListItem.categories.map((category) => (
          <Chip key={`chip-${category}`} className="category-chip" label={category} />
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
