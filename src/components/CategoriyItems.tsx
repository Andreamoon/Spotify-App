import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useRouteMatch } from "react-router-dom";
import { getCategoryById } from "../actions/index";
import { store } from "../redux/configureStore";
import { RootState } from "../redux/mainReducer";
import { PlaylistsItem } from "../types";
import { DetailsCategoryItem } from "./common/DetailsCategoryItem";
import { TrackItems } from "./TrackItems";

export function CategoryItems({ match }: any) {
  const {
    params: { id },
  } = match;
  const { url, path } = useRouteMatch();

  const playLists = useSelector(
    (store: RootState) => store.appReducer.playLists
  );
  const error = useSelector((store: RootState) => store.appReducer.error);
  const showBackToCategory = useSelector(
    (store: RootState) => store.appReducer.showBackToCategory
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryById(id));
  }, [match]);
  return (
    <>
      <h1>{error.isError ? error.message : id}</h1>

      <div className="cards">
        {playLists.map((obj: PlaylistsItem, index: number) => {
          console.log(obj)
          const { href, id, name, images } = obj;
          return (
            <div key={index}>
              <DetailsCategoryItem
                id={id}
                name={name}
                images={images}
                href={href}
              />{" "}
              
            </div>
          );
        })}
      </div>
    </>
  );
}
