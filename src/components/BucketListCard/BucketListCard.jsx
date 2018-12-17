import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Card from 'react-md/lib/Cards/Card';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Media from 'react-md/lib/Media/Media';
import MediaOverlay from 'react-md/lib/Media/MediaOverlay';

const BucketListCard = ({ bucketListItem }) => (
  <Card className="bucketlist-wrapper md-block-centered md-cell">
    <Media>
      <img src={`/bucket-list-images/${bucketListItem.featuredImageUrl}`} alt="" />
      <MediaOverlay>
        <CardTitle title={bucketListItem.title} subtitle={bucketListItem.status} />
      </MediaOverlay>
    </Media>

    <CardText
      style={{
        minHeight: '100px'
      }}
    >
      <p>{bucketListItem.description}</p>
    </CardText>
    <CardActions>
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
