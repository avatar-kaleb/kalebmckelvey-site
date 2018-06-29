import React from "react";
import InspirationListItem from "../InspirationListItem/InspirationListItem";

const InspirationList = ({ inspirations }) => (
  <div>
    {inspirations.map(inspiration => (
      <InspirationListItem key={inspiration.id} inspiration={inspiration} />
    ))}
  </div>
);

export default InspirationList;
