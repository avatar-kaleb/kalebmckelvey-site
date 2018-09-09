import React from "react";

const SubcategoryResourceList = ({ resources }) => (
  <ul>
    {resources.map(resource => (
      <li key={resource.name}>
        <p>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            {resource.name}
          </a>{" "}
          {resource.description ? `- ${resource.description}` : ""}
          <br />
          <br />
        </p>
      </li>
    ))}
  </ul>
);

export default SubcategoryResourceList;
