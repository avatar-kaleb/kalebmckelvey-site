import React from 'react';
import BucketListCard from '../BucketListCard/BucketListCard';

/**
 *  Functional component to display a list of bucket list cards
 * @param {Array} bucketListItems - list of bucket list items from the bucket list data
 */
const BucketListCardList = ({ bucketListItems }) => (
  <section className="bucketlist-card-list md-grid">
    {bucketListItems.map((bucketListItem) => (
      <BucketListCard key={bucketListItem.id} bucketListItem={bucketListItem} />
    ))}
  </section>
);

export default BucketListCardList;
