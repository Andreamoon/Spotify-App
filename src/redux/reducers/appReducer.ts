import { ofType } from "redux-observable";
import { switchMap, tap, catchError } from "rxjs/operators";
import { Epic } from "redux-observable";

import { CategoriesActionTypes } from "../../actions/actionTypes";
import { Action } from "redux-actions";
import { AppState } from "../../interfaces";
import { Observable, of } from "rxjs";
import { RootState } from "../mainReducer";
import { retrieveViaAjax } from "../ajaxcalls";
import { Categories } from "../../types/index";
import { GetCategoriesAction } from "../../interfaces";
import { Item } from "../../types/index";
import * as actionTypes from "../../actions/actionTypes";
const initialState: AppState = {
  isLoading: false,
  items: [
    {
      href: "",
      id: "",
      name: "",
      icons: [{ url: "", width: "0", height: "0" }],
    },
  ],
  showSpotifyBack: false,
  playLists: [],
  error: { message: "", isError: false },
  showBackToCategory: false,
};
let categoriesUrl =
  "https://any-api.com:8443/https://api.spotify.com/v1/browse/categories?limit=24&offset=0";

export const appReducer = (
  state: AppState = initialState,
  action: Action<any>
): AppState => {
  switch (action.type) {
    case CategoriesActionTypes.GET_CATEGORIES:
      return { ...state, isLoading: true };
    case CategoriesActionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: { message: "", isError: false },
      };
    case CategoriesActionTypes.GET_CATEGORIES_ERROR:
      return {
        ...state,
        error: { message: action.payload, isError: action.error },
      };
    case actionTypes.SET_SHOW_SPOTIFY_LOGO_BACK:
      return { ...state, showSpotifyBack: !state.showSpotifyBack };
    case CategoriesActionTypes.GET_CATEGORY_BY_ID:
      return { ...state, showSpotifyBack: true };
    case CategoriesActionTypes.GET_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        playLists: action.payload,
        error: { message: "", isError: false },
      };
    case CategoriesActionTypes.GET_CATEGORY_BY_ID_ERROR:
      return {
        ...state,
        error: { message: action.payload, isError: action.error },
      };
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
      return retrieveViaAjax(process.env.TOKEN, categoriesUrl).pipe(
        switchMap((result: any) => {
          return of({
            type: CategoriesActionTypes.GET_CATEGORIES_SUCCESS,
            payload: result.response.categories.items,
          });
        }),
        catchError((error) =>
          of({
            type: CategoriesActionTypes.GET_CATEGORIES_ERROR,
            payload: error.response.error.message,
            error: true,
          })
        )
      );
    })
  );

export const getCategoryById = (
  action$: Observable<Action<GetCategoriesAction>>,
  state$: RootState
) =>
  action$.pipe(
    ofType(CategoriesActionTypes.GET_CATEGORY_BY_ID),
    switchMap((action) => {
      return retrieveViaAjax(
        process.env.TOKEN,
        `https://api.spotify.com/v1/browse/categories/${action.payload}/playlists?limit=24&offset=0`
      ).pipe(
        switchMap((result: any) => {
          return of({
            type: CategoriesActionTypes.GET_CATEGORY_BY_ID_SUCCESS,
            payload: result.response.playlists.items,
          });
        }),
        catchError((error) =>
          of({
            type: CategoriesActionTypes.GET_CATEGORY_BY_ID_ERROR,
            payload: error.response.error.message,
            error: true,
          })
        )
      );
    })
  );
