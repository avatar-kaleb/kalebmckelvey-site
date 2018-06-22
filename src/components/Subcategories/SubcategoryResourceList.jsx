import React from "react";

const SubcategoryResourceList = ({ resources }) => (
  <ul>
    {resources.map((resource, index) => (
      <li key={resource.name}>
        <a href={resource.link} target="_blank" rel="noopener noreferrer">
          {resource.name}
        </a>
      </li>
    ))}
  </ul>
);

export default SubcategoryResourceList;
