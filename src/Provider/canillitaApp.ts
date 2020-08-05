import { newsNormalizer } from "../utils/news";

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

export const getLatestNews = async (date: string) => {
  const apiRequest = await fetch(`${BASE_URL}/latest/${date}`);
  const response = await apiRequest.json();

  return newsNormalizer(response);
};

export const getNewsByCategory = async (category: number) => {
  const apiRequest = await fetch(`${BASE_URL}/news/category/${category}`);
  const response = await apiRequest.json();

  return newsNormalizer(response);
};

export const getNewsByWord = async (searchWord: string) => {
  const apiRequest = await fetch(`${BASE_URL}/search/${searchWord}`);
  const response = await apiRequest.json();

  return newsNormalizer(response);
};
