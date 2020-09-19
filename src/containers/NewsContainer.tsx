//REACT
import React from "react";

//COMPONENTS
import NewsCard from "../components/NewsCards";
import SkeletonContainer from "../components/Skeleton";

//STYLES
import {
  BigCardContainer,
  VerticalCardsContainer,
  Container,
  HorizontalCardsContainer,
} from "./styles";

//UTILS
import { useNews } from "../utils/news";

//TYPESCRIPT
import { News } from "../interfaces/news";

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
        type="big"
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
          type="medium"
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
          type="small"
        />
      ))}
    </HorizontalCardsContainer>
  );
};

const NewsContainer: React.FC<{ news: News[]; loading: boolean }> = ({
  news,
  loading,
}) => {
  const { bigNews, topNews, middleNews, smallNews } = useNews(news);

  if (loading) return <SkeletonContainer />;

  return news.length ? (
    <Container container spacing={0}>
      <TopSection bigNews={bigNews} topNews={topNews} />
      <SmallCardsSection news={middleNews} />
      <SmallCardsSection news={smallNews} />
    </Container>
  ) : null;
};

export default NewsContainer;
