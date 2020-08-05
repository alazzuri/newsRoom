import { NewsResponse } from "../interfaces/news";

export const newsNormalizer = (NewsResponse: Array<NewsResponse>) =>
  NewsResponse.slice(0, 10).map(
    (news: NewsResponse) =>
      news && {
        imgUrl: news.img_url,
        id: news.news_id,
        title: news.title,
        sourceName: news.source_name,
        url: news.url,
      }
  );
