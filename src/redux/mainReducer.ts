import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import * as ajaxcalls from "./ajaxcalls";

import { appReducer, getCategories } from "./reducers/appReducer";
import { AppState } from "../interfaces";
import { store } from "./configureStore";

export type RootState = ReturnType<typeof store.getState>;

export const mainReducer = combineReducers({
   appReducer,
});

export const epics: Function =
  (injected?: Function) =>
  (...args: [any]) =>
    combineEpics(getCategories)(...args, injected);
