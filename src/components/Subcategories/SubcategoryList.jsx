import React from 'react';
import ExpansionList from 'react-md/lib/ExpansionPanels/ExpansionList';
import ExpansionPanel from 'react-md/lib/ExpansionPanels/ExpansionPanel';
import SubcategoryResourceList from './SubcategoryResourceList';

/**
 * Renders a subcategroy from a resource list
 * @param {Array} subcategories - list of subcategories to render
 */
const SubcategoryList = ({ subcategories }) => (
  <ExpansionList>
    {subcategories.map((subcategory) => (
      <ExpansionPanel key={subcategory.name} label={subcategory.name} footer={null}>
        <SubcategoryResourceList label={subcategory.name} resources={subcategory.resources} />
      </ExpansionPanel>
    ))}
  </ExpansionList>
);

export default SubcategoryList;
