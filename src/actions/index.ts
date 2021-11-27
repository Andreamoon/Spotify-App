import * as actionTypes from "./actionTypes";

import { action } from "typesafe-actions";

export function getCategories() {
  return action(actionTypes.CategoriesActionTypes.GET_CATEGORIES);
}
