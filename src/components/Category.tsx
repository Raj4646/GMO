import React, { useState } from 'react';
import SubCategory from './SubCategory';

interface CategoryProps {
  department: string;
  subDepartments: string[];
}

const Category: React.FC<CategoryProps> = ({ department, subDepartments }) => {
  const [subCategoryStates, setSubCategoryStates] = useState<{ [key: string]: boolean }>(
    subDepartments.reduce((acc, subCategory) => ({ ...acc, [subCategory]: false }), {})
  );

  const areAllSubCategoriesChecked = Object.values(subCategoryStates).every(Boolean);

  const handleSubCategoryToggle = (subCategory: string) => {
    setSubCategoryStates((prevState) => ({
      ...prevState,
      [subCategory]: !prevState[subCategory],
    }));
  };

  const handleCategoryToggle = () => {
    const newAllSubCategoriesChecked = !areAllSubCategoriesChecked;
    const newSubCategoryStates: { [key: string]: boolean } = {};

    for (const subCategory of subDepartments) {
      newSubCategoryStates[subCategory] = newAllSubCategoriesChecked;
    }

    setSubCategoryStates(newSubCategoryStates);
  };

  return (
    <div className="category">
      <div className="category-header">
        <input type="checkbox" checked={areAllSubCategoriesChecked} onChange={handleCategoryToggle} />
        <label>{department}</label>
      </div>
      <ul className="subcategory-list">
        {subDepartments.map((subCategory) => (
          <SubCategory
            key={subCategory}
            name={subCategory}
            checked={subCategoryStates[subCategory]}
            onSubCategoryToggle={() => handleSubCategoryToggle(subCategory)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Category;
