import React from 'react';
import InspirationListItem from '../InspirationListItem/InspirationListItem';

/**
 * Functional component to display a list of inspiration items
 * @param {Array} inspirations - list of inspiration items from the inspiration data
 */
const InspirationList = ({ inspirations }) => (
  <section className="inspiration-list">
    {inspirations.map(inspiration => (
      <InspirationListItem key={inspiration.id} inspiration={inspiration} />
    ))}
  </section>
);

export default InspirationList;
