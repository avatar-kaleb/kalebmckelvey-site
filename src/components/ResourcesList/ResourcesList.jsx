import React from "react";
import SubcategoryList from "../Subcategories/SubcategoryList";

const CategoryTitle = props => <h1>{props.category}</h1>;

const ResourcesList = ({ resources, type }) => (
  <div>
    {resources[type].map((resource, index) => (
      <div key={resource.category}>
        <CategoryTitle category={resource.category} />
        <SubcategoryList subcategories={resource.subcategories} />
        <br />
      </div>
    ))}
  </div>
);

export default ResourcesList;
