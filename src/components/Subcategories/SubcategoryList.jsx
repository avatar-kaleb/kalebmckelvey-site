import React from "react";

import { ExpansionList, ExpansionPanel } from "react-md";

import SubcategoryResourceList from "./SubcategoryResourceList";
import SubcategoryTitle from "./SubcategoryTitle";

const SubcategoryList = ({ subcategories }) => (
  <ExpansionList>
    {subcategories.map((subcategory, index) => (
      <ExpansionPanel key={index} label={subcategory.name} footer={null}>
        <SubcategoryResourceList
          label={subcategory.name}
          resources={subcategory.resources}
        />
      </ExpansionPanel>
    ))}
  </ExpansionList>
);

export default SubcategoryList;
