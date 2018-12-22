import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Card from 'react-md/lib/Cards/Card';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Chip from 'react-md/lib/Chips/Chip';
import Media from 'react-md/lib/Media/Media';
import MediaOverlay from 'react-md/lib/Media/MediaOverlay';

// CSS
import './BucketListCard.scss';

const BucketListCard = ({ bucketListItem }) => (
  <Card className="bucketlist-card md-block-centered md-cell">
    <Media>
      <img src={`/bucket-list-images/${bucketListItem.featuredImageUrl}`} alt={bucketListItem.featuredImageAlt} />
      <MediaOverlay>
        <CardTitle title={bucketListItem.title} subtitle={bucketListItem.status} />
      </MediaOverlay>
    </Media>

    <CardText className="metadata-flex">
      <section className="borough-cost-flex">
        <p>{bucketListItem.location}</p>
        <p className="cost-level-text">{bucketListItem.costLevel}</p>
      </section>
      <p>{bucketListItem.description}</p>
      <section className="category-flex">
        {bucketListItem.categories.map(category => (
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
