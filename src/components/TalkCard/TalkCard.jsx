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
import './TalkCard.scss';

/**
 * This component displays a summary card with title, category, cost level, description, and
 * links to the blog posts / youtube posts from the data
 * @param {Object} talk -The bucket list data to show in card form
 */
const TalkCard = ({ talk }) => (
  <Card className='talk-card md-block-centered md-cell'>
    <Media>
      <img src={`/talk-images/${talk.featuredImageUrl}`} alt={talk.featuredImageAlt} />
      <MediaOverlay>
        <CardTitle title={talk.title} subtitle={talk.eventName} />
      </MediaOverlay>
    </Media>

    <CardText className='card-text'>
      <section className='location-and-type'>
        <p>{talk.location}</p>
        <p className='talk-type-text'>{talk.type}</p>
      </section>
      <p>{talk.summary}</p>
    </CardText>
    <CardActions className='md-divider-border md-divider-border--top'>
      <Button flat primary disabled={talk.repoUrl.length === 0} href={talk.repoUrl}>
        Repo
      </Button>
      <Button flat primary disabled={talk.slidesUrl.length === 0} href={talk.slidesUrl}>
        Slides
      </Button>
      <Button flat primary disabled={talk.youtubeUrl.length === 0} href={talk.youtubeUrl}>
        Video
      </Button>
    </CardActions>
  </Card>
);

export default TalkCard;
