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
import { Category } from "../Category";
import * as actionTypes from "../../actions/actionTypes";
export function DetailsCategory({
  href,
  images,
  name,
  id,
}: PlaylistsItem): JSX.Element {
  let { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  function onClick(id: string) {
    

    dispatch({ type: actionTypes.SET_SHOW_SPOTIFY_LOGO_BACK });
    dispatch({ type: actionTypes.SET_SHOW_BACK_TO_CATEGORY ,payload:id});
  }
  //
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
    </>
  );
}

export function Topic({ match }: any) {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let id = useParams();

  console.log(match);

  return (
    <div>
      <h1>topicId</h1>
    </div>
  );
}
