import React from 'react';

/**
 * Displays a list of resources for a subcategory
 * @param {Array} resources - list of resources to show for a subcategory
 */
const SubcategoryResourceList = ({ resources }) => (
  <ul>
    {resources.map((resource) => (
      <li key={resource.name}>
        <p>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            {resource.name}
          </a>
          &nbsp;
          {resource.description ? `- ${resource.description}` : ''}
          <br />
          <br />
        </p>
      </li>
    ))}
  </ul>
);

export default SubcategoryResourceList;
