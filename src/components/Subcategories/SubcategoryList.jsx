import React from "react";

import { ExpansionList, ExpansionPanel } from "react-md";

import SubcategoryResourceList from "./SubcategoryResourceList";

const SubcategoryList = ({ subcategories }) => (
  <ExpansionList>
    {subcategories.map(subcategory => (
      <ExpansionPanel key={subcategory.name} label={subcategory.name} footer={null}>
        <SubcategoryResourceList label={subcategory.name} resources={subcategory.resources} />
      </ExpansionPanel>
    ))}
  </ExpansionList>
);

export default SubcategoryList;
