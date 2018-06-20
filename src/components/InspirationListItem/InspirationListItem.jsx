import React from "react";

const InspirationListItem = ({ inspiration }) => (
  <div>
    <h4>
      #{inspiration.id} -{" "}
      <a href={inspiration.link} target="_blank" rel="noopener">
        {inspiration.title}
      </a>
    </h4>
    <p>{inspiration.value}</p>
    <hr />
  </div>
);

export default InspirationListItem;
