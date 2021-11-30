import * as actionTypes from "./actionTypes";

import { action } from "typesafe-actions";

export function getCategories() {
  return action(actionTypes.CategoriesActionTypes.GET_CATEGORIES);
}

export function getCategoryById(id: string) {
  return action(actionTypes.CategoriesActionTypes.GET_CATEGORY_BY_ID, id);
}

export function getTracksById(id: string) {
  return action(actionTypes.TrackActionTypes.GET_TRACK_BY_ID, id);
}
