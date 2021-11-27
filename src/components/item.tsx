import React, { Component, useState, useEffect } from "react";
import { Item } from "../types";

export function ItemComponent({ href }: Item): any {
  return <h4>{href}</h4>;
}
