import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryById } from "../actions/index";
import { store } from "../redux/configureStore";
import { RootState } from "../redux/mainReducer";
import { PlaylistsItem } from "../types";
import { DetailsCategory } from "./common/DetailsCategory";
import { SvgIcons } from "./common/Icons";
export function Category({ match }: any) {
  const {
    params: { id },
  } = match;
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
      {/* {showBackToCategory ? (
        <Link
          to={process.env.PUBLIC_URL + "/category"}
          className="spotify-logo"
          // onClick={onClickSpotifyLogo}
        >
          <SvgIcons iconName={"spotify-logo"} />
          <label>Back to Browse Categories</label>
        </Link>
      ) : null} */}

      <div className="cards">
        {playLists.map((obj: PlaylistsItem, index: number) => {
          const { href, id: categoryId, name, images } = obj;
          return (
            <DetailsCategory
              key={index}
              id={categoryId}
              name={name}
              images={images}
              href={href}
            />
          );
        })}
      </div>
    </>
  );
}
