import * as actionTypes from "./actionTypes";

import { action } from "typesafe-actions";

export function getCategories() {
  return action(actionTypes.CategoriesActionTypes.GET_CATEGORIES);
}

export function getCategoryById(id: string) {
  return action(actionTypes.CategoriesActionTypes.GET_CATEGORY_BY_ID, id);
}
