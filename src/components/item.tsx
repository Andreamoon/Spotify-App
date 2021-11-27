import React, { Component, useState, useEffect } from "react";
import { Item } from "../types";

export function ItemComponent({ href, id, name, icons }: Item): JSX.Element {
  console.log(icons);
  return (
    <div
      className="card"
      style={{ height: icons[0].height, width: icons[0].width }}
    >
      <div className="overlayer">
        <i className="far fa-play-circle"></i>
      </div>
      <img src={icons[0].url} alt="" />
      <div className="title">
        <a href="#">{name}</a>
      </div>
    </div>
  );
}
