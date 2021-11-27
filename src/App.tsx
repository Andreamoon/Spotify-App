import React, { Component, useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCategories } from "./actions";
import { ItemComponent } from "./components/common/item";
import { Item } from "./types";
import { Category } from "./components/Category";
import { RootState } from "./redux/mainReducer";
import { Switch, Route, Link, useLocation } from "react-router-dom";

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="wrapper">
      <h1>Supercharge the week</h1>
      <Route exact path={process.env.PUBLIC_URL} component={Home} />
      <Route
        exact
        path={process.env.PUBLIC_URL + "category/:id"}
        component={Category}
      ></Route>
    </div>
  );
}

function Home() {
  const items = useSelector((store: RootState) => store.appReducer.items);

  return (
    <div className="cards">
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
  );
}
