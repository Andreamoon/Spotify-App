import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { AppState } from "../interfaces";
import { mainReducer } from "./mainReducer";
import { createLogger } from "redux-logger";
import * as ajaxcalls from "./ajaxcalls";

import { epics } from "./mainReducer";

const epicMiddleware = createEpicMiddleware();

const logger = createLogger();

let initialState = {};

function configureStore() {
  var middleware;
  if (process.env.NODE_ENV === "development") {
    middleware = applyMiddleware(epicMiddleware,logger);
  } else {
    middleware = applyMiddleware(epicMiddleware);
  }

  const store = createStore(mainReducer, initialState, middleware);

  epicMiddleware.run(epics(ajaxcalls));

  return store;
}

export const store: any = configureStore();
