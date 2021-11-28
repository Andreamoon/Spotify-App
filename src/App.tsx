import React, { Component, useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCategories } from "./actions";
import { ItemComponent } from "./components/common/item";
import { Item } from "./types";
import { Category } from "./components/Category";
import { DetailsCategory, Topic } from "./components/common/DetailsCategory";
import { RootState } from "./redux/mainReducer";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
  useParams,
} from "react-router-dom";
import { SvgIcons } from "./components/common/Icons";
import * as actionTypes from "./actions/actionTypes";

export function App() {
  const showSpotifyBack = useSelector(
    (store: RootState) => store.appReducer.showSpotifyBack
  );

  const history = useHistory();
  let params = useParams();
  let { path, url } = useRouteMatch();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  function onClickSpotifyLogo() {
    dispatch({ type: actionTypes.SET_SHOW_SPOTIFY_LOGO_BACK });
  }

  return (
    <div className="wrapper">
      {showSpotifyBack ? (
        <Link
          to={process.env.PUBLIC_URL}
          className="spotify-logo"
          onClick={onClickSpotifyLogo}
        >
          <SvgIcons iconName={"spotify-logo"} />
          <label>Back to Browse Categories</label>
        </Link>
      ) : null}
      <Switch>
        <Route exact path={process.env.PUBLIC_URL} component={Home} />
        <Route
          exact
          path={process.env.PUBLIC_URL + "category/:id"}
          component={Category}
        ></Route>
        <Route
          exact
          path={history.location.pathname}
          component={Topic}
        ></Route>
      </Switch>
    </div>
  );
}

function Home() {
  const items = useSelector((store: RootState) => store.appReducer.items);

  return (
    <>
      {" "}
      <h1>Supercharge the week</h1>
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
    </>
  );
}
