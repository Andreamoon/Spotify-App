import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { PlaylistsItem } from "../../types";
import * as actionTypes from "../../actions/actionTypes";
import { TrackItems } from "../TrackItems";

export function DetailsCategoryItem({
  href,
  images,
  name,
  id,
}: PlaylistsItem): JSX.Element {
  let { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  function onClick(id: string) {
    console.log(`${url}/${id}`);

    dispatch({ type: actionTypes.SET_SHOW_SPOTIFY_LOGO_BACK });
    dispatch({ type: actionTypes.SET_SHOW_BACK_TO_CATEGORY, payload: id });
  }
  console.log(`${url}/${id}`);
  return (
    <>
      <Link to={`${url}/${id}`} onClick={() => onClick(id)}>
        <div className="card" style={{ cursor: "pointer" }}>
          <div className="overlayer">
            <i className="far fa-play-circle"></i>
          </div>
          <img src={images[0].url} alt="" />
          <div className="title">
            <label>{name}</label>
          </div>
        </div>
      </Link>
      <Route
        exact
        path={`${url}/${id}`}
        component={TrackItems}
      />
    </>
  );
}
