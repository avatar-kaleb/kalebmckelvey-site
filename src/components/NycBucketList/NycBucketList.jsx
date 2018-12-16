// absolute
import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Media from 'react-md/lib/Media/Media';

// relative
import NycBucketListData from '../../../data/NycBuckstListData';
import BucketListCardList from '../BucketListCardList/BucketListCardList';

class NycBucketList extends Component {
  render() {
    return (
      <div className="observations-wrapper wrapper-flex-column--center md-grid mobile-fix">
        <BucketListCardList bucketListItems={NycBucketListData} />
      </div>
    );
  }
}

export default NycBucketList;
