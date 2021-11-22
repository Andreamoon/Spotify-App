import { createAction } from "redux-actions";
export const actionTypes = {
  SAMPLE_ACTION: "SAMPLE_ACTION",
};

export const sampleAction = createAction(actionTypes.SAMPLE_ACTION);
