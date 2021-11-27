import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryById } from "../actions/index";
export function Category({ match }: any) {
  const {
    params: { id },
  } = match;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryById(id));
  }, [match]);
  return (
    <>
      <h1>category</h1>

     
    </>
  );
}
