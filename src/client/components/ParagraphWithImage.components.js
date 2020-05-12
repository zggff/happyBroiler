import "babel-polyfill";
import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";
import s from "../App.scss";

export const ParagraphWithImage = ({ image, header, content, left }) => {
  const lazyLoadImage = (imageName, img) => {
    import(
      /* webpackMode: "lazy-once" */
      `../../images/${imageName}`
    )
      .then((src) => (img.src = src.default))
      .catch((err) => console.error(err));
  };

  useStyles(s);
  return (
    <div className="paragraphWithImage">
      <div className={left ? "paragraph par-left" : "paragraph par-right"}>
        <div className="row">
          <div className="left">
            {header && <h2>{header}</h2>}
            <div className="content">{content}</div>
          </div>
          <div className="right">{image && <img src={image} alt=""></img>}</div>
        </div>
      </div>
    </div>
  );
};
