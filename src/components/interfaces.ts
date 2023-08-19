// interfaces.ts
export interface Subcategories {
  [subcategory: string]: boolean;
}

export interface CheckedCategories {
  [category: string]: boolean;
}

export interface CategoryItem {
  label: string;
  subcategories: string[];
}

export interface CategoryProps {
  label: string;
  subcategories: string[];
  onCategoryChange: (isChecked: boolean) => void;
  onSubcategoryChange: (subcategory: string, isChecked: boolean) => void;
  isCategoryChecked: boolean;
  checkedSubcategories: Subcategories;
}

export interface CategoriesListProps {
  categories: CategoryItem[];
}
