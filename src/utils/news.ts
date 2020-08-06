import { NewsResponse } from "../interfaces/news";

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

export const categoryNumber = (category: string) => {
  switch (category.toLowerCase()) {
    case "política":
      return 1;
    case "internacionales":
      return 2;
    case "tecnología":
      return 3;
    case "espectáculos":
      return 4;
    case "deportes":
      return 5;
    case "diseño":
      return 6;

    default:
      return null;
  }
};
