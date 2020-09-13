import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../actions";
import { HOME_FEED } from "../../utils/constants";
import NewsCard from "../../components/NewsCards";
import {
  BigCardContainer,
  VerticalCardsContainer,
  NewsContainer,
  HorizontalCardsContainer,
} from "./styles";
import { useNews } from "../../utils/news";
import { News } from "../../interfaces/news";

const news = [
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
];

const TopSection: React.FC<{ bigNews: News; topNews: News[] }> = ({
  bigNews,
  topNews,
}) => (
  <>
    <BigCardContainer item sm={12} lg={4}>
      <NewsCard
        title={bigNews.title}
        sourceName={bigNews.sourceName}
        imgUrl={bigNews.imgUrl}
        url={bigNews.url}
      />
    </BigCardContainer>
    <VerticalCardsContainer item sm={12} lg={8}>
      {topNews.map((oneNews) => (
        <NewsCard
          key={oneNews.id}
          title={oneNews.title}
          sourceName={oneNews.sourceName}
          imgUrl={oneNews.imgUrl}
          url={oneNews.url}
        />
      ))}
    </VerticalCardsContainer>
  </>
);

const SmallCardsSection: React.FC<{ news: News[] }> = ({ news }) => {
  return (
    <HorizontalCardsContainer item sm={6} lg={12}>
      {news.map((oneNews) => (
        <NewsCard
          key={oneNews.id}
          title={oneNews.title}
          sourceName={oneNews.sourceName}
          imgUrl={oneNews.imgUrl}
          url={oneNews.url}
        />
      ))}
    </HorizontalCardsContainer>
  );
};

const Home = () => {
  const lala = useSelector((state) => state);
  const dispatch = useDispatch();

  const { bigNews, topNews, middleNews, smallNews } = useNews(news);

  return (
    <NewsContainer container spacing={0}>
      <TopSection bigNews={bigNews} topNews={topNews} />
      <SmallCardsSection news={middleNews} />
      <SmallCardsSection news={smallNews} />
    </NewsContainer>
  );
};

export default Home;
