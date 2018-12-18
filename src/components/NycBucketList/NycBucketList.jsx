// absolute
import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Media from 'react-md/lib/Media/Media';

// relative
import NycBucketListData from '../../../data/NycBucketListData';
import BucketListCardList from '../BucketListCardList/BucketListCardList';

class NycBucketList extends Component {
  render() {
    return (
      <div className="nyc-bucketlist-wrapper animated fadeIn slow md-grid mobile-fix">
        <BucketListCardList bucketListItems={NycBucketListData} />
      </div>
    );
  }
}

export default NycBucketList;
