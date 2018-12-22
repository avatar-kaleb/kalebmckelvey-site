import React from 'react';
import ObservationListItem from '../ObservationListItem/ObservationListItem';

const ObservationList = ({ observations }) => (
  <section className="observation-list">
    {observations.map(observation => (
      <ObservationListItem key={observation.id} observation={observation} />
    ))}
  </section>
);

export default ObservationList;
