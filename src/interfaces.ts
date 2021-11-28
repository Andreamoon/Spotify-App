import { Action } from "redux-actions";
import { CategoriesActionTypes } from "./actions/actionTypes";
import { Item } from "./types";

export interface AppState {
  isLoading: boolean;
  items: [Item];
  showSpotifyBack: boolean;
  showBackToCategory: boolean;
  playLists: [];
  error: { message: string; isError: boolean };
}

export interface GetCategoriesAction extends Action<any> {
  type: CategoriesActionTypes.GET_CATEGORIES;
  payload: {
    items: [Item];
  };
}
