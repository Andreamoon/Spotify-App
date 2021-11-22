import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { Action } from "redux-actions";
import { RootState, mainReducer } from "./mainReducer";
import { createLogger } from "redux-logger";
import * as ajaxcalls from "./ajaxcalls";

import { epics } from "./mainReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}
const logger = createLogger();

const epicMiddleware = createEpicMiddleware<
  Action<any>,
  Action<any>,
  RootState
>();

let initialState = {};

function configureStore() {
  var middleware;
  if (process.env.NODE_ENV === "development") {
    middleware = applyMiddleware(epicMiddleware, logger);
  } else {
    middleware = applyMiddleware(epicMiddleware);
  }

  const store = createStore(mainReducer, initialState, middleware);

  epicMiddleware.run(epics(ajaxcalls));

  return store;
}

export const store: any = configureStore();

