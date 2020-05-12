import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";
import s from "../App.scss";

export const Loader = () => {
  useStyles(s);
  return (
    <div className="loader">
      <div className="ldsDualRing"></div>
    </div>
  );
};
