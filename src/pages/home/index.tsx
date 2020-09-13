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

const news = {
  id: 1722425,
  imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
  sourceName: "Olé",
  title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
  url:
    "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
};

const TopSection = () => (
  <>
    <BigCardContainer item sm={12} lg={4}>
      <NewsCard
        id={news.id}
        title={news.title}
        sourceName={news.sourceName}
        imgUrl={news.imgUrl}
        url={news.url}
      />
    </BigCardContainer>
    <VerticalCardsContainer item sm={12} lg={8}>
      <NewsCard
        id={news.id}
        title={news.title}
        sourceName={news.sourceName}
        imgUrl={news.imgUrl}
        url={news.url}
      />
      <NewsCard
        id={news.id}
        title={news.title}
        sourceName={news.sourceName}
        imgUrl={news.imgUrl}
        url={news.url}
      />
      <NewsCard
        id={news.id}
        title={news.title}
        sourceName={news.sourceName}
        imgUrl={news.imgUrl}
        url={news.url}
      />
    </VerticalCardsContainer>
  </>
);

const Home = () => {
  const lala = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <NewsContainer container spacing={0}>
      <TopSection />
      <HorizontalCardsContainer item sm={6} lg={12}>
        <NewsCard
          id={news.id}
          title={news.title}
          sourceName={news.sourceName}
          imgUrl={news.imgUrl}
          url={news.url}
          type="small"
        />
        <NewsCard
          id={news.id}
          title={news.title}
          sourceName={news.sourceName}
          imgUrl={news.imgUrl}
          url={news.url}
          type="small"
        />
        <NewsCard
          id={news.id}
          title={news.title}
          sourceName={news.sourceName}
          imgUrl={news.imgUrl}
          url={news.url}
          type="small"
        />
      </HorizontalCardsContainer>
      <HorizontalCardsContainer item sm={6} lg={12}>
        <NewsCard
          id={news.id}
          title={news.title}
          sourceName={news.sourceName}
          imgUrl={news.imgUrl}
          url={news.url}
          type="small"
        />
        <NewsCard
          id={news.id}
          title={news.title}
          sourceName={news.sourceName}
          imgUrl={news.imgUrl}
          url={news.url}
          type="small"
        />
        <NewsCard
          id={news.id}
          title={news.title}
          sourceName={news.sourceName}
          imgUrl={news.imgUrl}
          url={news.url}
          type="small"
        />
      </HorizontalCardsContainer>
    </NewsContainer>
  );
};

export default Home;
