//UTILS
import { BASE_URL } from "../utils/constants";
import { newsNormalizer } from "../utils/news";

export const getLatestNews = async (date: string, signal: AbortSignal) => {
  try {
    const apiRequest = await fetch(`${BASE_URL}/latest/${date}`, { signal });
    const response = await apiRequest.json();

    return newsNormalizer(response);
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getNewsByCategory = async (
  category: number,
  signal: AbortSignal
) => {
  if (!category) return [];

  try {
    const apiRequest = await fetch(`${BASE_URL}/news/category/${category}`, {
      signal,
    });
    const response = await apiRequest.json();

    return newsNormalizer(response);
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getNewsByWord = async (
  searchWord: string,
  signal: AbortSignal
) => {
  try {
    const apiRequest = await fetch(`${BASE_URL}/search/${searchWord}`, {
      signal,
    });
    const response = await apiRequest.json();

    return newsNormalizer(response);
  } catch (err) {
    console.log(err);
    return [];
  }
};
