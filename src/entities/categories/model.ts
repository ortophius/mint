import { getAllCategories, getCategory } from "../../shared/api/modules/menu";
import { Category } from "../../shared/api/modules/types";

export const currentCategoryModel = {
  name: "currentCategory",
  initialState: null as null | Category,
  fn: getCategory,
};

export const allCategories = {
  name: "allCategories",
  initialState: [] as Category[],
  fn: getAllCategories,
};
