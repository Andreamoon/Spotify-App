import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import { appReducer,sampleEpic } from './reducers/appReducer'
import { AppState } from '../interfaces'
import { store } from './configureStore'

export type RootState = ReturnType<typeof store.getState>;


export const mainReducer = combineReducers({
  appState: appReducer,
})




export const epics =
  (injected:any) =>
  (...args:[any]) =>
    combineEpics(
      sampleEpic
    )(...args, injected);
