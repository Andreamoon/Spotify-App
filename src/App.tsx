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
    <div className="wrapper">
      	<h1>Supercharge the week</h1>

      <div className="cards">
        {" "}
        {items.map((obj: Item, index: number) => {
          const { href, id, name, icons } = obj;
          return (
            <ItemComponent
              key={index}
              href={href}
              id={id}
              name={name}
              icons={icons}
            />
          );
        })}
      </div>
    </div>
  );
}
