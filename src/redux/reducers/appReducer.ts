import { ofType } from "redux-observable";
import { switchMap, tap } from "rxjs/operators";

import { actionTypes } from "../../actions/actions";
import { Action } from "redux-actions";
import { AppState } from "../../interfaces";
import { Observable, of } from "rxjs";
import { RootState } from "../mainReducer";

const initialState = {
  isLoading: false,
};

export const appReducer = (
  state: AppState = initialState,
  action: Action<any>
): AppState => {
  switch (action.type) {
    case actionTypes.SAMPLE_ACTION:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export const sampleEpic = (action$: any, state$: RootState) =>
  action$.pipe(
    ofType(actionTypes.SAMPLE_ACTION),
    switchMap((action) => {
      console.log(action);
      return of({ type: "NOPE" });
    })
  );
