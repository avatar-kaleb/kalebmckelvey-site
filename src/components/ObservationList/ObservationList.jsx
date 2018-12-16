import React from 'react';
import ObservationListItem from '../ObservationListItem/ObservationListItem';

const ObservationList = ({ observations }) => (
  <section>
    {observations.map(observation => (
      <ObservationListItem key={observation.id} observation={observation} />
    ))}
  </section>
);

export default ObservationList;
