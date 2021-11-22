import React, { Component, useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import { actionTypes, sampleAction } from "./actions/actions";
import { store } from "./redux/configureStore";


export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:actionTypes.SAMPLE_ACTION})
}, []);
  return <>Welcome from app comonent</>;
}
