import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";
import s from "../App.scss";

export const Footer = () => {
  useStyles(s);
  return (
    <div className="footer">
      <p>&copy; Zggff</p>
    </div>
  );
};
