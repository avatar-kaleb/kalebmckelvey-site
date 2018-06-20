import React from "react";

const ObservationListItem = ({ observation }) => (
  <div>
    <h4>
      #{observation.id} - <strong>{observation.title}</strong>
    </h4>
    <p>{observation.value}</p>
    <hr />
  </div>
);

export default ObservationListItem;
