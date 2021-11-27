import { Action } from "redux-actions";
import { CategoriesActionTypes } from "./actions/actionTypes";
import { Item} from "./types";

export interface AppState {
  isLoading: boolean;
  items:[Item]
  
}

export interface GetCategoriesAction extends Action<any> {
  type: CategoriesActionTypes.GET_CATEGORIES;
  payload: {
    items: [Item];
  };
}
