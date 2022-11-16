import { createEndpoint, get } from "../fetch";
import { Category, MenuItem } from "./types";

const paths = {
  allCategories: () => `/categories`,
  category: (category: string) => {
    return `/categories/${category}`;
  },
  allItemsInCategory: (category: string) => `/items/${category}`,
  item: (itemId: string) => `/item/${itemId}`,
};

export const getAllCategories = createEndpoint<Category[]>(paths.allCategories);
export const getCategory = createEndpoint<Category>(paths.category);
export const getItems = createEndpoint<MenuItem[]>(paths.allItemsInCategory);
export const getItem = createEndpoint<MenuItem>(paths.item);
