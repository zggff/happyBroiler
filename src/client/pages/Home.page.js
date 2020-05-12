import React from "react";
import { Helmet } from "react-helmet";
import logo from "../../images/happy-broiler-logo2.svg";

export const HomePage = () => {
  return (
    <div className="home">
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>happy broiler</title>
        </Helmet>
        <h2>
          Счастливый бройлер, выращенный с заботой о здоровье наших покупателей
        </h2>
        <img className="home-logo" src={logo} alt="happy broiler logo" />
        <h1 style={{ display: "none" }}>Happy Broiler</h1>
      </div>
    </div>
  );
};
