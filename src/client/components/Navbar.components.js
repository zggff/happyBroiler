import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useStyles from "isomorphic-style-loader/useStyles";
import s from "../App.scss";

export const Navbar = () => {
  useStyles(s);
  let [navActive, setNavActive] = useState(false);
  const changeNav = () => {
    setNavActive(!navActive);
  };
  return (
    <nav className="nav">
      <input type="checkbox" id="check" checked={navActive} readOnly />
      <label onClick={changeNav} className="checkbtn">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          className="svg-inline--fa fa-bars fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </label>
      <label className="logo">Happy Broiler</label>
      <ul>
        <li>
          <NavLink exact to="/" onClick={changeNav}>
            главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={changeNav}>
            контакты
          </NavLink>
        </li>
        <li>
          <NavLink to="/goods" onClick={changeNav}>
            экопродукты
          </NavLink>
        </li>
        <li>
          <NavLink to="/standarts" onClick={changeNav}>
            стандарты
          </NavLink>
        </li>
        <li>
          <NavLink to="/comments" onClick={changeNav}>
            отзывы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
