import React from 'react';

/**
 * Functional component to display an inspiration item
 * @param {Object} inspiration - the inspiration item to list
 */
const InspirationListItem = ({ inspiration }) => (
  <div className="inspiration-list-item">
    <h4>
      #{inspiration.id}
      &nbsp;-&nbsp;
      <a href={inspiration.link} target="_blank" rel="noopener noreferrer">
        {inspiration.title}
      </a>
    </h4>
    <p>{inspiration.value}</p>
    <hr />
  </div>
);

export default InspirationListItem;
