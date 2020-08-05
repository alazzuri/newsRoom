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
