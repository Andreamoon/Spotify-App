import React, { Component, useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCategories } from "./actions";
import { ItemComponent } from "./components/item";
import { Item } from "./types";
export function App() {
  const items = useSelector((store) => store.appReducer.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      ciao
      {items.map((obj: Item, index: number) => (
        <ItemComponent href={obj.href} key={index} />
      ))}
    </>
  );
}
