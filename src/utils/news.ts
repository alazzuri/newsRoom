//TYPESCRIPT
import { News, NewsResponse } from "../interfaces/news";

export const newsNormalizer = (NewsArray: Array<NewsResponse>) =>
  NewsArray.slice(0, 10).map(
    (news: NewsResponse) =>
      news && {
        imgUrl: news.img_url,
        id: news.news_id,
        title: news.title,
        sourceName: news.source_name,
        url: news.url,
      }
  );

export const getCategoryNumber = (category: string) => {
  switch (category.toLowerCase()) {
    case "politics":
      return 1;
    case "internationals":
      return 2;
    case "technologies":
      return 3;
    case "shows":
      return 4;
    case "sports":
      return 5;
    case "design":
      return 6;

    default:
      return 0;
  }
};

export const useNews = (news: News[]) => {
  const [bigNews] = news.slice(0, 1);
  const topNews = news.slice(1, 4);
  const middleNews = news.slice(4, 7);
  const smallNews = news.slice(7);

  return { bigNews, topNews, middleNews, smallNews };
};

export const normalizeTitle = (title: string) => {
  if (title.length > 90) {
    const shortenedTitle = title.slice(0, 90);
    return `${shortenedTitle}...`;
  } else {
    return title;
  }
};
