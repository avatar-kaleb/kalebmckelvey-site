import React from "react";
import InspirationListItem from "../InspirationListItem/InspirationListItem";

const InspirationList = ({ inspirations }) => (
  <div>
    {inspirations.map(inspiration => (
      <InspirationListItem inspiration={inspiration} />
    ))}
  </div>
);

export default InspirationList;
