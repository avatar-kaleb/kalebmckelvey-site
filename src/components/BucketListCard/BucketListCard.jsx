import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Card from 'react-md/lib/Cards/Card';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Media from 'react-md/lib/Media/Media';
import MediaOverlay from 'react-md/lib/Media/MediaOverlay';

const BucketListCard = ({ bucketListItem }) => (
  <Card className="md-block-centered md-cell">
    <Media>
      <img src={`/post-images/${bucketListItem.featuredImageUrl}`} alt="Nature from lorempixel" />
      <MediaOverlay>
        <CardTitle title={bucketListItem.title} subtitle={bucketListItem.tagline} />
      </MediaOverlay>
    </Media>

    <CardText>
      <p>{bucketListItem.description}</p>
    </CardText>
    <CardActions>
      <Button flat primary>
        Blogpost
      </Button>
      <Button flat primary>
        Youtube Video
      </Button>
    </CardActions>
  </Card>
);

export default BucketListCard;
