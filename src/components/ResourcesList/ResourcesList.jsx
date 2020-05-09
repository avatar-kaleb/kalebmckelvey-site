import React from 'react';
import SubcategoryList from '../Subcategories/SubcategoryList';

/**
 * the category title wrapper component
 */
const CategoryTitle = ({ category }) => <h1>{category}</h1>;

/**
 * Functional component to list out resources based on type
 * @param {Array} resources - list of resources to show
 * @param {String} type - type of resource to show - life or dev
 */
const ResourcesList = ({ resources, type }) => (
  <div className="resources-list">
    {resources[type].map((resource) => (
      <div key={resource.category}>
        <CategoryTitle category={resource.category} />
        <SubcategoryList subcategories={resource.subcategories} />
        <br />
      </div>
    ))}
  </div>
);

export default ResourcesList;
