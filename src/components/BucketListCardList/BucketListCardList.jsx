import React from 'react';
import BucketListCard from '../BucketListCard/BucketListCard';

const BucketListCardList = ({ bucketListItems }) => (
  <section className="md-grid">
    {bucketListItems.map(bucketListItem => (
      <BucketListCard key={bucketListItem.id} bucketListItem={bucketListItem} />
    ))}
  </section>
);

export default BucketListCardList;
