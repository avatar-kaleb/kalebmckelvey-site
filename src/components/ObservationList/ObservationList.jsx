import React from "react";
import ObservationListItem from "../ObservationListItem/ObservationListItem";

const ObservationList = ({ observations }) => (
  <div>
    {observations.map(observation => (
      <ObservationListItem key={observation.id} observation={observation} />
    ))}
  </div>
);

export default ObservationList;
