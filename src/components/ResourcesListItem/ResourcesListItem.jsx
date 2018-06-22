import React from "react";

const SubcategoryTitle = props => <h2>props.subcategory</h2>;
const SubcategoresUnorderedList = props => (
  <ul>
    {props.resources.map((resource, index) => (
      <li key={resource.name}>
        <a href={resource.link} target="_blank" rel="noopener noreferrer">
          {resource.name}
        </a>
      </li>
    ))}
  </ul>
);
const SubcategoriesListWrapper = props => (
  <div>
    <SubcategoryTitle subcategory={props.subcategory.name} />
    <SubcategoresUnorderedList resources={props.subcategory.resources} />
  </div>
);
const ResourcesListItem = ({ resource }) => (
  <div>
    {resource.subcategories.map((subcategory, index) => (
      <div key={index}>
        <SubcategoriesListWrapper subcategory={subcategory} />
      </div>
    ))}
  </div>
);

export default ResourcesListItem;
