import React from "react";
import { Helmet } from "react-helmet";
import OrdersForm from "../components/OrdersForm.components";

export const GoodsPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>happy broiler товары</title>
      </Helmet>
      <h1>экопродукты</h1>
      <ul>
        <li>курица бройлер 300руб/кг</li>
        <li>яйца куриные 150руб/10 штук</li>
        <li>яйца гусиные 70руб/1 штука</li>
        {/* <li>индейки бройлеры 500р/кг</li> */}
        {/* <li>колбаса и сосиски</li> */}
        {/* <li>и другие продукты с нашего огорода</li> */}
      </ul>
      <OrdersForm />
    </div>
  );
};
