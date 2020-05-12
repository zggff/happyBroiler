import React from "react";
import CommentsForm from "../components/CommentsForm.components";
import Comments from "../components/Comments.components";
import { Helmet } from "react-helmet";

export const CommentsPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>happy broiler отзывы</title>
      </Helmet>
      <h2>Отзывы наших покупателей</h2>
      <p>
        в целях улучшения качества выпускаемой продукции и сервиса обслуживания
        мы регулярно проводим опрос наших клиентов и стремимся учесть все
        пожелания и критику.
      </p>
      <CommentsForm />
      <Comments />
    </div>
  );
};
