import React from 'react';

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
