import React from 'react';
import ObservationListItem from '../ObservationListItem/ObservationListItem';

/**
 * Creates a list of observation list items
 * @param {Array} observations - a list of observation from the observation data
 */
const ObservationList = ({ observations }) => (
  <section className="observation-list">
    {observations.map(observation => (
      <ObservationListItem key={observation.id} observation={observation} />
    ))}
  </section>
);

export default ObservationList;
