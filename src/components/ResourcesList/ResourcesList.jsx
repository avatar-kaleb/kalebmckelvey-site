import React from 'react';
import SubcategoryList from '../Subcategories/SubcategoryList';

const CategoryTitle = ({ category }) => <h1>{category}</h1>;

const ResourcesList = ({ resources, type }) => (
  <div className="resources-list">
    {resources[type].map(resource => (
      <div key={resource.category}>
        <CategoryTitle category={resource.category} />
        <SubcategoryList subcategories={resource.subcategories} />
        <br />
      </div>
    ))}
  </div>
);

export default ResourcesList;
