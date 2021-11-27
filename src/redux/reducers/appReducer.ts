import { ofType } from "redux-observable";
import { switchMap, tap } from "rxjs/operators";
import { Epic } from "redux-observable";

import { CategoriesActionTypes } from "../../actions/actionTypes";
import { Action } from "redux-actions";
import { AppState } from "../../interfaces";
import { Observable, of } from "rxjs";
import { RootState } from "../mainReducer";
import { retrieveViaAjax } from "../ajaxcalls";
import { Categories } from "../../types/index";
import { GetCategoriesAction } from "../../interfaces";
import { Item} from "../../types/index";
const initialState: { items: [Item]; isLoading: boolean } = {
  isLoading: false,
  items: [
    {
      href: "",
    },
  ],
};
let url =
  "https://any-api.com:8443/https://api.spotify.com/v1/browse/categories?limit=20&offset=0";
let token =
  "BQCIqkD4RDfCqS8yw-gDZYCO4yitRNtrKTmrEX9icpbfcy1G_7lhdChpzaS9Dm3zmVs3L5LxC-LCpcHKVZCm-FeRqUs0DiBqCvMf3zpaA4A6SojUamiUwbTIvtJ1DbnqyW0QJKboTCPpxxo";

export const appReducer = (
  state: AppState = initialState,
  action: Action<any>
): AppState => {
  switch (action.type) {
    case CategoriesActionTypes.GET_CATEGORIES:
      return { ...state, isLoading: true };
      case CategoriesActionTypes.GET_CATEGORIES_SUCCESS:
      return { ...state, items:action.payload };  
    default:
      return state;
  }
};

export const getCategories = (
  action$: Observable<Action<GetCategoriesAction>>,
  state$: RootState
) =>
  action$.pipe(
    ofType(CategoriesActionTypes.GET_CATEGORIES),
    switchMap((action) => {
      return retrieveViaAjax(process.env.TOKEN, url).pipe(
        switchMap((result: any) => {
          if (result.response.categories) {
            return of({
              type: CategoriesActionTypes.GET_CATEGORIES_SUCCESS,
              payload: result.response.categories.items,
            });
          } else {
            return of({ type: CategoriesActionTypes.GET_CATEGORIES_ERROR });
          }
        })
      );
    })
  );
