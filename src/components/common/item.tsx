import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "../../types";
import { Link } from "react-router-dom";
import * as actionTypes from "../../actions/actionTypes";

export function ItemComponent({ href, id, name, icons }: Item): JSX.Element {
  const dispatch = useDispatch();
  
  function onClick(id: string) {
    dispatch({ type: actionTypes.SET_SHOW_SPOTIFY_LOGO_BACK ,id});
  }
  return (
    <Link to={"category/" + id} onClick={() => onClick(id)}>
      <div className="card" style={{ cursor: "pointer" }}>
        <div className="overlayer">
          <i className="far fa-play-circle"></i>
        </div>
        <img src={icons[0].url} alt="" />
        <div className="title">
          <label>{name}</label>
        </div>
      </div>
    </Link>
  );
}
