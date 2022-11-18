import { getItems } from "../../shared/api/modules/menu";
import { MenuItem } from "../../shared/api/modules/types";

export const dishListModel = {
  name: "dishes",
  initialState: [] as MenuItem[],
  fn: getItems,
};
