import React from 'react';

interface SubCategoryProps {
  name: string;
  checked: boolean;
  onSubCategoryToggle: () => void;
}

const SubCategory: React.FC<SubCategoryProps> = ({ name, checked, onSubCategoryToggle }) => {
  return (
    <li className="subcategory">
      <input type="checkbox" checked={checked} onChange={onSubCategoryToggle} />
      <label>{name}</label>
    </li>
  );
};

export default SubCategory;
