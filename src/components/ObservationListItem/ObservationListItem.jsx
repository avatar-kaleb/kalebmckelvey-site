import React from 'react';

/**
 * Displays an observation in user friendly form
 * @param {Object} observation - object of observation data to display
 */
const ObservationListItem = ({ observation }) => (
  <div className="observation-list-item">
    <h4>
      #
      {observation.id}
      &nbsp;- &nbsp;
      <strong>{observation.title}</strong>
    </h4>
    <p>{observation.value}</p>
    <hr />
  </div>
);

export default ObservationListItem;
