import React from "react";
import { Helmet } from "react-helmet";
import { ParagraphWithImage } from "../components/ParagraphWithImage.components";
import chicken2 from "../../images/chicken2.jpg";
import chicken1 from "../../images/chicken1.jpg";
import chick1 from "../../images/chick1.jpg";
import chick2 from "../../images/chick2.jpg";
import food1 from "../../images/food1.jpg";
import broiler2 from "../../images/broiler2.jpg";
import broiler3 from "../../images/broiler3.jpg";
import killing from "../../images/killing.jpg";

export const StandartsPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>happy broiler стандарты качерства</title>
      </Helmet>
      <h1>наши стандарты</h1>
      <p style={{ fontSize: "20px" }}>
        От закладки инкубационного яйца до гуманитарного забоя - все наши усилия
        направлены к одной цели - поставка к столу натурального качественного
        мяса.
      </p>
      <ParagraphWithImage
        // header="ИНКУБАЦИЯ"
        image={chicken2}
        content={
          <p>
            Инкубационное яйцо чешского бройлера "Кобб 500", доставленное с
            соблюдением температурных и временных норм, закладывает основу
            нашего производственного цикла.
          </p>
        }
        left={true}
      />
      <ParagraphWithImage
        // header="развитие птенцов"
        image={chicken1}
        content={
          <div>
            <p>
              Наши постояльцы проходят три этапа со дня своего рождения до
              забоя:
            </p>
            <ul>
              <li> с 1-ого по 10 день в брудере</li>
              <li>с 11 по 20 день в зоне для молодняка</li>
              <li>с 21 по 40 день в финишной зоне</li>
            </ul>
          </div>
        }
        left={false}
      />
      <ParagraphWithImage
        // header="развитие птенцов"
        image={chick1}
        content={
          <p>
            Каждому этапу предшествует санитарная обработка и дезинфекция клеток
            и помещения.
          </p>
        }
        left={true}
      />
      <ParagraphWithImage
        // header="развитие птенцов"
        image={chick2}
        content={
          <p>
            Проход в производственную зону осуществляется исключительно в
            санитарной одежде и посторонним строго запрещен.
          </p>
        }
        left={false}
      />
      <ParagraphWithImage
        // header="питание"
        image={food1}
        content={
          <div>
            <p>для кормления наших постояльцев мы используем:</p>
            <ul>
              <li>корм для профессионалов "Смоленского КХП";</li>
              <li>бифидобактерии Новосибирского предприятия Нетопласт;</li>
              <li>зерновой размол собственного приготовления;</li>
            </ul>
          </div>
        }
        left={true}
      />
      <ParagraphWithImage
        // header="корма"
        image={broiler2}
        content={
          <div>
            <p>Мы не используем:</p>
            <ul>
              <li>антибиотики</li>
              <li>стимуляторы роста</li>
            </ul>
          </div>
        }
        left={false}
      />
      <ParagraphWithImage
        // header="корма"
        image={broiler3}
        content={
          <p>
            Условия содержания и постоянный мониторинг состояния постояльцев
            позволяют нам вырастить здоровых бройлеров и обеспечить наших
            покупателей вкусным и свежим мясом.
          </p>
        }
        left={true}
      />
      <ParagraphWithImage
        // header="санитарные условия"
        image={killing}
        content={
          <p>
            Оборудование в разделочном помещении соответствует требованиям
            СанПиНа с наличием подтверждающих сертификатов
          </p>
        }
        left={false}
      />

      {/* <ul>
        <li>наша задача - здоровье покупателей</li>
        <li>мы не используем стимуляторы роста</li>
        <li>мы не используем антибиотики</li>
        <li>мы используем только натуральные корма</li>
        <li>мы не используем комбикорма</li>
        <li>мы проводим контроль за условиями содержания</li>
        <li>выполняется регулярное ветеринарное обследование</li>
        <li>мы используем корма только прооверенных производителей</li>
      </ul> */}
    </div>
  );
};
