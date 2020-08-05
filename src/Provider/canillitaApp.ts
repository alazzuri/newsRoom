import { NewsResponse } from "../interfaces/news";
import { newsNormalizer } from "../utils/news";

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

export const getLatestNews = async (date: string) => {
  const apiRequest = await fetch(`${BASE_URL}/latest/${date}`);
  const response = await apiRequest.json();
  const slicedResponse: Array<NewsResponse> = await response
    .slice(0, 10)
    .map((news: NewsResponse) => {
      return (
        news && {
          imgUrl: news.img_url,
          id: news.news_id,
          title: news.title,
          sourceName: news.source_name,
          url: news.url,
        }
      );
    });

  return slicedResponse;
};

export const getNewsByCategory = async (category: number) => {
  const apiRequest = await fetch(`${BASE_URL}/news/category/${category}`);
  const response = await apiRequest.json();

  console.log(newsNormalizer(response));
};
