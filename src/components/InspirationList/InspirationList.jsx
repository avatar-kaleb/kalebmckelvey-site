import React from 'react';
import InspirationListItem from '../InspirationListItem/InspirationListItem';

const InspirationList = ({ inspirations }) => (
  <section className="inspiration-list">
    {inspirations.map(inspiration => (
      <InspirationListItem key={inspiration.id} inspiration={inspiration} />
    ))}
  </section>
);

export default InspirationList;
