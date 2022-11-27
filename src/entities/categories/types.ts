import { Category } from "../../shared/api/modules/types";

export type CategoriesState = {
  currentCategory: Category | null;
  allCategories: Category[];
};
