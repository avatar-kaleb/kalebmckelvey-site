import React from 'react';
import TalkCard from '../TalkCard/TalkCard';

/**
 * Displays a list of service cards
 * @param {Array} talks - list of services from service data
 */
const TalksList = ({ talks }) => (
  <div className='md-grid'>
    {talks.map(talk => (
      <TalkCard key={talk.id} talk={talk} />
    ))}
  </div>
);

export default TalksList;
