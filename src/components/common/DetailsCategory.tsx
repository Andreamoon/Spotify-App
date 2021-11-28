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

export function DetailsCategory({
  href,
  images,
  name,
  id,
}: PlaylistsItem): JSX.Element {
  let { path, url } = useRouteMatch();

  function onClick(id: string) {
    console.log(id);
  }
  //   console.log(path, url);
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
