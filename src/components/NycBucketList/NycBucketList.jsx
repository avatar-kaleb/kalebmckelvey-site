// absolute
import React from 'react';

// relative
import NycBucketListData from '../../../data/NycBucketListData';
import BucketListCardList from '../BucketListCardList/BucketListCardList';

/**
 * NYC Bucket List Page Component
 */
const NycBucketList = () => (
  <div className='nyc-bucketlist animated fadeInUp md-grid mobile-fix'>
    <BucketListCardList bucketListItems={NycBucketListData} />
  </div>
);

export default NycBucketList;
