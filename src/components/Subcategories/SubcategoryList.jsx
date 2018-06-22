import React from "react";

import SubcategoryResourceList from "./SubcategoryResourceList";
import SubcategoryTitle from "./SubcategoryTitle";

const SubcategoryList = ({ subcategories }) => (
  <div>
    {subcategories.map((subcategory, index) => (
      <div key={index}>
        <SubcategoryTitle subcategoryTitle={subcategory.name} />
        <SubcategoryResourceList
          label={subcategory.name}
          resources={subcategory.resources}
        />
        <hr />
      </div>
    ))}
  </div>
);

export default SubcategoryList;
