import React, { Component, useState, useEffect } from "react";
import { Item } from "../../types";
import { Link } from "react-router-dom";
export function ItemComponent({ href, id, name, icons }: Item): JSX.Element {
  return (
    <Link to={"category/" + id}>
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
